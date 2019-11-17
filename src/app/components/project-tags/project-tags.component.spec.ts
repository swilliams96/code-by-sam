import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagsComponent } from './project-tags.component';
import { RouterModule } from '@angular/router';

describe('ProjectTagsComponent', () => {
  let component: ProjectTagsComponent;
  let fixture: ComponentFixture<ProjectTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTagsComponent],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
