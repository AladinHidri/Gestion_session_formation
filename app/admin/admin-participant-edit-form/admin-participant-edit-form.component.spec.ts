import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantEditFormComponent } from './admin-participant-edit-form.component';

describe('AdminParticipantEditFormComponent', () => {
  let component: AdminParticipantEditFormComponent;
  let fixture: ComponentFixture<AdminParticipantEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminParticipantEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParticipantEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
