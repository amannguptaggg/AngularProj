import { Component } from '@angular/core';
import {NewServiceService} from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewServiceService]
})
export class AppComponent {
  title = 'My New Project';
  value:any[];


constructor(private _newService:NewServiceService) {}
ngOnInit() {
  this.value = this._newService.stu();
}

     email:any="";
     password:any="";
     phone:any="";
registerForm(regForm:any) {
     
      this.email = regForm.controls.emailF.value;
      this.password = regForm.controls.passF.value;
      this.phone = regForm.controls.phoneF.value; 
  }
   Lemail:any="";
   Lpass:any="";
logIn(logForm:any) {
   this.Lemail = logForm.value.LoginEmail;
   this.Lpass = logForm.value.LoginPasswprd;
   alert(this.Lemail+" "+this.Lpass);
}

}