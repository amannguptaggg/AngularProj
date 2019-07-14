import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentPortalComponent} from './student-portal/student-portal.component'

const routes: Routes = [
  {
    path: 'student',
    component: StudentPortalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
