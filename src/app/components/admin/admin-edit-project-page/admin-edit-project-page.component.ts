import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectImage } from 'src/app/models/project-image.model';
import { Project } from 'src/app/models/project.model';
import { Router, ActivatedRoute } from '@angular/router';

interface ProjectInput extends Project {
  tagsInput: string;
}

@Component({
  selector: 'app-admin-edit-project-page',
  templateUrl: './admin-edit-project-page.component.html',
  styleUrls: ['./admin-edit-project-page.component.scss']
})
export class AdminEditProjectPageComponent implements OnInit {
  readonly host = window.location.host;
  @ViewChild('newImageInput', { static: false }) newImageInput: ElementRef<HTMLInputElement>;
  projectForm: FormGroup;
  images: ProjectImage[] = [];
  /** Whether the submit button has been clicked yet. */
  submitButtonClicked = false;
  /** Whether the form has been submitted successfully  (with valid data). */
  submitted = false;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params);
    if (this.route.snapshot.params.slug) {
      const project = this.projectService.projects.find(x => x.slug === this.route.snapshot.params.slug);
      if (project) {
        this._initialiseProjectForm(project);
        this._setupExistingImages(project);
      } else {
        this.router.navigateByUrl('/admin/projects');
      }
    } else {
      this._initialiseProjectForm();
    }
  }

  /** Update the slug value with the new field value on change. */
  recalculateSlugValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;

    this.projectForm.setValue({
      ...this.projectForm.value,
      slug: newValue
        .toLowerCase()
        .replace(/([^A-Za-z0-9\-])/g, '-')
        .replace(/\-+/g, '-')
    });
  }

  /** Handler for when images are chosen by the user. */
  newImagesChosenHandler() {
    if (!window.File || !window.FileList || !window.FileReader) {
      console.error('Your browser does not support File API - please update or switch to a more modern browser...');
    }

    const files = this.newImageInput.nativeElement.files;
    // tslint:disable-next-line: prefer-for-of : FileList is not iterable
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file.type.match('image')) {
        continue;
      }

      const fileReader = new FileReader();
      fileReader.addEventListener('load', event => {
        this.images.push({
          exists: false,
          data: (event.target as any).result.toString()
        });
      });
      fileReader.readAsDataURL(file);
    }
  }

  /** Remove image from the list. */
  removeImage(index: number) {
    if (this.images.length <= index) {
      console.error(`Could not remove image at ID ${index} as there are not that many images.`);
      return;
    }

    this.images.splice(index, 1);
  }

  /** The handler for the submission of the form. */
  submit() {
    this.submitButtonClicked = true;

    if (!this.projectForm.valid) {
      return;
    }

    if (this.projectForm.get('slug').value !== this.route.snapshot.params.slug) {
      const existingProject = this.projectService.projects.find(x => x.slug === this.projectForm.get('slug').value);
      if (!!existingProject) {
        this.projectForm.get('slug').setErrors({
          'not-unique': 'This slug is already being used by another project, please choose something else.'
        });
        return;
      }
    }

    this.submitted = true;

    const tagsInput: string = this.projectForm.get('tagsInput').value;
    const tags: string[] = tagsInput.split(',').map(x => x.trim());

    const project: ProjectInput = { ...this.projectForm.value, tags };
    delete project.tagsInput;

    this.projectService
      .saveProject(project, this.images)
      .then(() => {
        console.log('Successfully saved project!', project.slug);
        this.router.navigateByUrl('/admin/projects');
      })
      .catch(err => {
        this.submitted = false;
        throw err;
      });
  }

  /** Set up the project form group. */
  private _initialiseProjectForm(project?: Project) {
    this.projectForm = new FormGroup({
      title: new FormControl(project ? project.title : '', [Validators.required]),
      description: new FormControl(project ? project.description : '', [Validators.required]),
      slug: new FormControl(project ? project.slug : '', [Validators.required]),
      url: new FormControl(project ? project.url : ''),
      date: new FormControl(project ? project.date : ''),
      tagsInput: new FormControl(project && project.tags ? project.tags.join(', ') : '', [Validators.pattern(/(.+?)(?:,\s*|$)/)])
    });
  }

  private _setupExistingImages(project: Project) {
    if (!project || !project.images) {
      console.warn('No project images supplied...', project);
      return;
    }

    this.images = [];

    project.images.forEach(async imageName => {
      this.images.push({
        exists: true,
        name: imageName,
        downloadUrl: await this.projectService.getProjectImageStorageUrl(project.slug, imageName)
      });
    });
  }
}
