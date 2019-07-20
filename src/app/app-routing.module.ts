import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutes} from './Routing'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
