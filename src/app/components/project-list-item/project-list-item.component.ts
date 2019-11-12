import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit() { }

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
