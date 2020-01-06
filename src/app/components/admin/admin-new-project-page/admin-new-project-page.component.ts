import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-new-project-page',
  templateUrl: './admin-new-project-page.component.html',
  styleUrls: ['./admin-new-project-page.component.scss']
})
export class AdminNewProjectPageComponent implements OnInit {
  readonly host = window.location.host;
  @ViewChild('newImageInput', { static: false }) newImageInput: ElementRef<HTMLInputElement>;
  projectForm: FormGroup;
  images: Image[] = [];
  /** Whether the submit button has been clicked yet. */
  submitButtonClicked = false;
  /** Whether the form has been submitted successfully  (with valid data). */
  submitted = false;

  constructor() {}

  ngOnInit() {
    this._initialiseProjectForm();
  }

  /** The handler for the submission of the form. */
  submit() {
    this.submitButtonClicked = true;

    if (!this.projectForm.valid) {
      return;
    }

    this.submitted = true;

    console.log('SUBMITTING...');
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
  imagesChosen() {
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
          data: event.target.result.toString()
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

  /** Set up the project form group. */
  private _initialiseProjectForm() {
    this.projectForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      slug: new FormControl('', [Validators.required]),
      url: new FormControl(''),
      date: new FormControl(''),
      tags: new FormControl('', [Validators.pattern(/(.+?)(?:,\s*|$)/)])
    });
  }
}

/** The model for adding new project images. */
interface Image {
  exists: boolean;
  data?: string;
  url?: string;
}
