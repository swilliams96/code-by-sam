import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewProjectPageComponent } from './admin-new-project-page.component';

describe('AdminNewProjectPageComponent', () => {
  let component: AdminNewProjectPageComponent;
  let fixture: ComponentFixture<AdminNewProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewProjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
