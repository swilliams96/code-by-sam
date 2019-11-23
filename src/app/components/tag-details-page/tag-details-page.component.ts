import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-tag-details-page',
  templateUrl: './tag-details-page.component.html',
  styleUrls: ['./tag-details-page.component.scss']
})
export class TagDetailsPageComponent implements OnInit, OnDestroy {
  tag: string;
  projects: Project[];
  private _subscription: Subscription;

  constructor(private route: ActivatedRoute, public scrollService: ScrollService) {}

  ngOnInit() {
    this._subscription = this.route.paramMap.subscribe(map => {
      this.tag = map.get('tag');
      this.projects = window.projects.filter(
        project => project.tags && project.tags.map(tag => tag.toUpperCase()).includes(this.tag.toUpperCase())
      );
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
