import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, NgForm,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My New Project';
  value:any[];
signupForm:FormGroup;
loginData:FormGroup;
emailName:string="";
password:string="";
phone: string="";
logEmail:string="";
logPassword:string="";

constructor(private _formbuilder:FormBuilder,private _loginFormBuilder:FormBuilder) {
   this.signupForm = this._formbuilder.group({
     fname: ['',Validators.required],
     fpass: ['',Validators.required],
     fphone: ['',Validators.required,Validators.minLength(3)],
   });

   this.loginData = this._loginFormBuilder.group({
     logName: new FormControl(),
     logPass: new FormControl(),
   });
  }

ngOnInit() {}

PostData(signupForm:any) {
   this.emailName = signupForm.controls.fname.value;
   this.password = signupForm.controls.fpass.value;
   this.phone = signupForm.controls.fphone.value;
  alert(this.emailName+" "+this.password+" "+this.phone);
}

LoginForm(loginData:any) {
  this.logEmail = loginData.controls.logName.value;
  this.logPassword = loginData.controls.logPass.value;
}


}