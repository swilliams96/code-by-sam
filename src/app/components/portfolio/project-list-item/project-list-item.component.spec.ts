import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectListItemComponent } from './project-list-item.component';
import { ProjectTagsComponent } from '../project-tags/project-tags.component';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-test-host-component',
  template: `<app-project-list-item [project]="project"></app-project-list-item>`
})
class TestHostComponent {
  project: Project = {
    title: 'Test Project',
    description: 'Test project description',
    slug: 'test-project'
  };
}

describe('ProjectListItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, ProjectListItemComponent, ProjectTagsComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });
});
