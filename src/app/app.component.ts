import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My New Project';
  value:any[];
signupForm:FormGroup;
emailName:string="";
password:string="";
phone: string="";

constructor(private _formbuilder:FormBuilder) {
   this.signupForm = this._formbuilder.group({
     fname: new FormControl(),
     fpass: new FormControl(),
     fphone: new FormControl(),
   });
}

ngOnInit() {}

PostData(signupForm:any) {
   this.emailName = signupForm.controls.fname.value;
   this.password = signupForm.controls.fpass.value;
   this.phone = signupForm.controls.fphone.value;
  alert(this.emailName+" "+this.password+" "+this.phone);
}


}