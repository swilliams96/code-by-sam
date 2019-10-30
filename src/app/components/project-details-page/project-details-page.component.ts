import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('slug') && window.projects) {
      const slug = this.route.snapshot.paramMap.get('slug').toLowerCase();
      const project: Project = window.projects.find(x => slug === x.slug.toLowerCase());

      if (project) {
        this.project = project;
        return;
      }
    }

    console.log(
      this.route.snapshot.paramMap,
      this.route.snapshot.paramMap.get('slug').toLowerCase(),
      this.route.snapshot.paramMap.has('slug'),
      window.projects
    );
    this.router.navigateByUrl('/404');
  }
}
