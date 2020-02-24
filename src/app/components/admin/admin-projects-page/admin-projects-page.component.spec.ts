import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsPageComponent } from './admin-projects-page.component';

describe('AdminProjectsPageComponent', () => {
  let component: AdminProjectsPageComponent;
  let fixture: ComponentFixture<AdminProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
