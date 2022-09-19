import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const appRoutes: Routes = [{
  path: 'list',
  component: SessionItemListComponent
  },{
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },{
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },{
    path: '**',
    component: PagenotfoundComponent
  }];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemListComponent,
    PagenotfoundComponent,
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
