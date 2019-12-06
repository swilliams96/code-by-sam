import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsPageComponent } from './project-details-page.component';
import { ProjectTagsComponent } from '../project-tags/project-tags.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

describe('ProjectDetailsPageComponent', () => {
  let component: ProjectDetailsPageComponent;
  let fixture: ComponentFixture<ProjectDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsPageComponent, ProjectTagsComponent, LoadingSpinnerComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
