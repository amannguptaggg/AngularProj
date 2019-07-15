import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, NgForm,Validators} from '@angular/forms'
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
     fname: ['',Validators.required],
     fpass: ['',Validators.required],
     fphone: ['',Validators.required],
   });

   this.loginData = this._loginFormBuilder.group({
     logName: new FormControl(),
     logPass: new FormControl(),
   });
  }

ngOnInit() {
  //to get chnage in each field.
  this.signupForm.get('fname').valueChanges.subscribe(
    Uname=>{
      console.log('fname changed'+ Uname);
    }
  )

  this.loginData.valueChanges.subscribe((Uname:formsignup)=> {
   
    console.log("logName Changed"+"  "+Uname.logName);
    console.log("logPass change"+"   "+Uname.logPass);

  }

  );
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