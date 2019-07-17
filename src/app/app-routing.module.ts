import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
     path:'company',
     loadChildren: 'src/app/company/company.module#CompanyModule'
    },
    {
      path:'',
      redirectTo:'',
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
