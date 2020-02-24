import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-projects-page',
  templateUrl: './admin-projects-page.component.html',
  styleUrls: ['./admin-projects-page.component.scss']
})
export class AdminProjectsPageComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.projects$ = this.projectService.projects$;
  }
}
