import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectListItemComponent } from './admin-project-list-item.component';

describe('AdminProjectListItemComponent', () => {
  let component: AdminProjectListItemComponent;
  let fixture: ComponentFixture<AdminProjectListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
