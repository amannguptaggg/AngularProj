import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,FormArray} from '@angular/forms';
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


FormGroup:FormGroup;
form:any;

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
  this.form = new FormGroup({
    contactNos:new FormArray([
      new FormControl('878934332'),
      new FormControl('453433435')
    ]),
  });
}

addContactNo() {
  this.form.get('contactNos').push(new FormControl());
}

subArrForm(){
  console.log(this.form.get('contactNos').value);
  console.log(this.form.value);
}

setPreset() {
  this.form.get('contactNos').patchValue(['12345678','123456755']);
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
