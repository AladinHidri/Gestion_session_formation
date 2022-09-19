import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantAddFormComponent } from './admin-participant-add-form.component';

describe('AdminParticipantAddFormComponent', () => {
  let component: AdminParticipantAddFormComponent;
  let fixture: ComponentFixture<AdminParticipantAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminParticipantAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParticipantAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
