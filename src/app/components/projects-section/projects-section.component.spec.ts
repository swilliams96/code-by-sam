import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionComponent } from './projects-section.component';
import { ProjectListItemComponent } from '../project-list-item/project-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectTagsComponent } from '../project-tags/project-tags.component';

describe('ProjectsSectionComponent', () => {
  let component: ProjectsSectionComponent;
  let fixture: ComponentFixture<ProjectsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSectionComponent, ProjectListItemComponent, ProjectTagsComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
