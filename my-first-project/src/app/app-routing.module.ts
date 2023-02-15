import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RegistrationComponent} from '../app/registration/registration.component'
import {AppComponent} from './app.component'
const routes: Routes = [
 { path:'registration', component:RegistrationComponent},
{path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
