import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,FormArray, NgForm} from '@angular/forms';
import {User} from "./user"
import { format } from 'path';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My New Project';
   user = new User();

   constructor() {}

   onFormSubmit(form:NgForm) {
     if(form.invalid){
       return;
     }
     console.log('User Name:'+form.controls['uName'].value);
     console.log('Gender Name:'+form.controls['gender'].value);
     console.log('User Married:'+form.controls['married'].value);
     console.log('User T & C:'+form.controls['tc'].value);
   }

   resetForm(form:NgForm) {
     this.user= new User();
     form.resetForm({
        married:false
   });
   }

   setDefault() {
     this.user.userName="Name";
     this.user.gender="Gender";
     this.user.isMarried=false;
     this.user.isTCAccepted=true;
   }
}
