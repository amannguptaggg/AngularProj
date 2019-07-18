import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {PreloadAllModules} from '@angular/router'
import { CustomPreloadStrategeyService } from './custom-preload-strategey.service';

const routes: Routes = [
  {
    path:'company',
    loadChildren:'src/app/company/company.module#CompanyModule',
  },
  {
    path:'customers',
    loadChildren:'src/app/customers/customers.module#CustomersModule',
    data:{ preload:true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    preloadingStrategy: CustomPreloadStrategeyService
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
