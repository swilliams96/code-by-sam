import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss']
})
export class ProjectTagsComponent implements OnInit {
  @Input() tags: string[];

  constructor() {}

  ngOnInit() {}
}
