import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-project-list',
  templateUrl: './admin-project-list.component.html',
  styleUrls: ['./admin-project-list.component.scss']
})
export class AdminProjectListComponent implements OnInit {
  @Input() limit = 2;
  @Input() showNewProjectButton = true;
  projects$: Observable<Project[]>;
  showViewAllLink = true;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects$ = this.projectService.projects$.pipe(
      tap(projects => (this.showViewAllLink = projects.length > this.limit)),
      map(projects => (projects && projects.length > this.limit ? projects.filter((_, i) => i < this.limit) : projects))
    );
  }
}
