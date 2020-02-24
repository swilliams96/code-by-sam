import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Observable, from, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-project-list-item',
  templateUrl: './admin-project-list-item.component.html',
  styleUrls: ['./admin-project-list-item.component.scss']
})
export class AdminProjectListItemComponent implements OnInit {
  @Input() project: Project;
  image$: Observable<string>;
  shortDescription = '';

  constructor(private projectService: ProjectService, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.image$ =
      this.project && this.project.images && this.project.images.length > 0
        ? from(this.storage.ref(`projects/${this.project.slug}/${this.project.images[0]}`).getDownloadURL())
        : of('');

    if (this.project && this.project.description) {
      this.shortDescription =
        this.project.description.length <= 375 ? this.project.description : this.project.description.substr(0, 370) + '…';
    }
  }

  deleteProject(project: Project): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(project);
    }
  }
}
