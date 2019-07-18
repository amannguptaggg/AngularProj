import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeComponent } from './employee/employee.component';
import {CompanyComponent} from './company.component'


@NgModule({
  declarations: [CompanyListComponent, EmployeeComponent,CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
