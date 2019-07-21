import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {PersonComponent} from './person/person.component'

const routes: Routes = [
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'person',
    component:PersonComponent
  },
  {
    path:'**',
    component:CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
