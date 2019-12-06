import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { Subscription, interval, timer, combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit, OnDestroy {
  project: Project;
  selectedImageIndex = 0;
  images$: Observable<string[]>;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('slug') && this.projectService.projects) {
      const slug = this.route.snapshot.paramMap.get('slug').toLowerCase();
      const project: Project = this.projectService.projects.find(x => slug === x.slug.toLowerCase());

      if (project) {
        this.project = project;
        this._setupImages();
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

  /** Initialise the list of image URLs. */
  private _setupImages() {
    if (this.project.images) {
      this.images$ = combineLatest(
        this.project.images.map(image => this.storage.ref(`projects/${this.project.slug}/${image}`).getDownloadURL() as Observable<string>)
      );

      //
    }
  }

  /** Initialise the autoplayer observable. */
  private _setupTimer() {
    // Stay on the selected image for 7 seconds before autoplaying every 5 seconds
    this.subscription = timer(7000)
      .pipe(switchMap(() => interval(5000)))
      .subscribe(() => {
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
