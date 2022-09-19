import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormateurEditFormComponent } from './admin-formateur-edit-form.component';

describe('AdminFormateurEditFormComponent', () => {
  let component: AdminFormateurEditFormComponent;
  let fixture: ComponentFixture<AdminFormateurEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormateurEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormateurEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
