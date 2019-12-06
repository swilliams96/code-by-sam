import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDetailsPageComponent } from './tag-details-page.component';
import { ProjectListItemComponent } from '../project-list-item/project-list-item.component';
import { ProjectTagsComponent } from '../project-tags/project-tags.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TagDetailsPageComponent', () => {
  let component: TagDetailsPageComponent;
  let fixture: ComponentFixture<TagDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagDetailsPageComponent, ProjectListItemComponent, ProjectTagsComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(() => {
  //   window.projects = [];
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
