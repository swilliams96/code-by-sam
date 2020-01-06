import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoadingSpinnerComponent } from './admin-loading-spinner.component';

describe('AdminLoadingSpinnerComponent', () => {
  let component: AdminLoadingSpinnerComponent;
  let fixture: ComponentFixture<AdminLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
