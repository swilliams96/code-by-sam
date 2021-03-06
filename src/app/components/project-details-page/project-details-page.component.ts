import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { Subscription, interval, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit, OnDestroy {
  project: Project;
  selectedImageIndex = 0;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('slug') && window.projects) {
      const slug = this.route.snapshot.paramMap.get('slug').toLowerCase();
      const project: Project = window.projects.find(x => slug === x.slug.toLowerCase());

      if (project) {
        this.project = project;
        this._setupTimer();
        return;
      }
    }

    this.router.navigateByUrl('/404');
  }

  ngOnDestroy() {
    this._unsubscribeTimer();
  }

  /** Select an image. */
  selectImage(index: number) {
    this.selectedImageIndex = index;
    this._unsubscribeTimer();
    this._setupTimer();
  }

  /** Initialise the autoplayer observable. */
  private _setupTimer() {
    // Stay on the selected image for 7 seconds before autoplaying every 5 seconds
    this.subscription = timer(7000).pipe(switchMap(() => interval(5000))).subscribe(() => {
      if (this.project && this.project.images) {
        if (this.selectedImageIndex < this.project.images.length - 1) {
          this.selectedImageIndex++;
        } else {
          this.selectedImageIndex = 0;
        }
      }
    });
  }

  /** Unsubscribe the autoplayer observerable, if it exists. */
  private _unsubscribeTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
