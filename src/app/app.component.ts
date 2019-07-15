import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, NgForm,Validators,FormArray} from '@angular/forms'
import { formsignup } from './formsignup';
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
     fname: ['',[Validators.required,Validators.email]],
     fpass: ['',[Validators.required,Validators.maxLength(14),Validators.minLength(5)]],
     fphone: ['',Validators.required],
   });

   this.loginData = this._loginFormBuilder.group({
     logName: new FormControl(),
     logPass: new FormControl(),
   });
  }

ngOnInit() {
  const arr = new FormArray([
      new FormControl(),
      new FormControl(),
   ]);
   // when we use setValue each value must be given,but patch value can takes less
   arr.patchValue(['Aman']);
  console.log(arr.value);
  console.log(arr.status);
}
// Getting Each Field  Value.
PostData() {
  this.emailName= this.signupForm.get('fname').value;
  this.password= this.signupForm.get('fpass').value;
  this.phone= this.signupForm.get('fphone').value;
  alert(this.emailName+" "+this.password+" "+this.phone);
}
//Getting all value form the form.
LoginForm() {
  this.logEmail = this.loginData.value;
  console.log(this.logEmail);
}

ResetForm() {
  this.signupForm.reset({
    fname:'xyz@gmail.com'
  });
}

}
