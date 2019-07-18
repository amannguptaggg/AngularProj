import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import {CompanyComponent} from "./company.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { EmployeeComponent } from "./employee/employee.component"

const routes: Routes = [
  { path:'',
    component:CompanyComponent,
    children:[
      {
        path: 'compnayList',
        component: CompanyListComponent
      },
      {
        path:'employee',
        component: EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { 
  constructor() {
    console.log('company routing loaded');
  }
}
