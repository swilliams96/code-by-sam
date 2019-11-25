import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects$ = this.projectService.projects$;
  }
}
