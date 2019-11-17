import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ProjectListItemComponent } from '../project-list-item/project-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectTagsComponent } from '../project-tags/project-tags.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        HeroSectionComponent,
        AboutSectionComponent,
        ProjectsSectionComponent,
        ProjectListItemComponent,
        ProjectTagsComponent
      ],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    window.projects = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
