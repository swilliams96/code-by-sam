import { Component } from '@angular/core';
import { Project } from './models/project.model';

declare global {
  interface Window {
    projects: Project[];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
