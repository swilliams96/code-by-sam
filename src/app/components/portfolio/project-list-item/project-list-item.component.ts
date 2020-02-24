import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Observable, of, from } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  image$: Observable<string>;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.image$ =
      this.project && this.project.images && this.project.images.length > 0
        ? from(this.storage.ref(`projects/${this.project.slug}/${this.project.images[0]}`).getDownloadURL())
        : of('');
  }

  get shortDescription(): string | undefined {
    if (!this.project || !this.project.description) {
      return;
    }

    if (this.project.description.length <= 375) {
      return this.project.description;
    } else {
      return this.project.description.substr(0, 370) + '…';
    }
  }
}
