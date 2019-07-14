import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Project';


registerForm(regForm:any) {
     
   var email = regForm.controls.emailF.value;
    console.log(regForm);
    alert(email);
  }



}