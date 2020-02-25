import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProjectPageComponent } from './admin-edit-project-page.component';

describe('AdminNewProjectPageComponent', () => {
  let component: AdminEditProjectPageComponent;
  let fixture: ComponentFixture<AdminEditProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditProjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
