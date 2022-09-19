import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFormateurListComponent } from './admin-formateur-list/admin-formateur-list.component';
import { AdminFormateurAddFormComponent } from './admin-formateur-add-form/admin-formateur-add-form.component';
import { AdminFormateurEditFormComponent } from './admin-formateur-edit-form/admin-formateur-edit-form.component';
import { AdminParticipantListComponent } from './admin-participant-list/admin-participant-list.component';
import { AdminParticipantEditFormComponent } from './admin-participant-edit-form/admin-participant-edit-form.component';
import { AdminParticipantAddFormComponent } from './admin-participant-add-form/admin-participant-add-form.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        { path: 'sessions/add', component: SessionAddFormComponent },
        { path: 'sessions/edit/:id', component: SessionEditFormComponent },
        { path: 'sessions/list', component: SessionItemListComponent},
        { path: 'formateur/list', component: AdminFormateurListComponent},
        { path: 'formateur/add', component: AdminFormateurAddFormComponent},
        { path: 'formateur/edit/:id', component: AdminFormateurEditFormComponent},
        { path: 'participant/list', component: AdminParticipantListComponent},
        { path: 'participant/add', component: AdminParticipantAddFormComponent},
        { path: 'participant/edit/:id', component: AdminParticipantEditFormComponent},
        { path: '', component: AdminDashboardComponent }],
  }];

@NgModule({
  declarations: [
      AdminComponent,
      SessionItemComponent,
      SessionItemListComponent,
      SessionAddFormComponent,
      SessionEditFormComponent,
      AdminDashboardComponent,
      AdminFormateurListComponent,
      AdminFormateurAddFormComponent,
      AdminFormateurEditFormComponent,
      AdminParticipantListComponent,
      AdminParticipantEditFormComponent,
      AdminParticipantAddFormComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
