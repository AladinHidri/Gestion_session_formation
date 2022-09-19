import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormateurListComponent } from './admin-formateur-list.component';

describe('AdminFormateurListComponent', () => {
  let component: AdminFormateurListComponent;
  let fixture: ComponentFixture<AdminFormateurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormateurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
