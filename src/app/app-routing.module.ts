import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreloadAllModules} from '@angular/router'

const routes: Routes = [
  {
    path:'company',
    loadChildren:'src/app/company/company.module#CompanyModule'
  },
  {
    path:'customers',
    loadChildren:'src/app/customers/customers.module#CustomersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
