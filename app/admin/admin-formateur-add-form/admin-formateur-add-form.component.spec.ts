import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormateurAddFormComponent } from './admin-formateur-add-form.component';

describe('AdminFormateurAddFormComponent', () => {
  let component: AdminFormateurAddFormComponent;
  let fixture: ComponentFixture<AdminFormateurAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormateurAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormateurAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
