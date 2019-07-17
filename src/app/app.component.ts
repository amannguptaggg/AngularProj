import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormsModule,NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  regForm:FormGroup;
  firstName: string="";
  lastName: string="";
  dob: Date= null;
  IsAccepted:number=0;

  constructor(private _fb:FormBuilder) {
    this.regForm = _fb.group({
      'firstName': [null,[Validators.required]],
      'lastName' : [null,[Validators.required]],
      'dob' : [null,[Validators.required]],
      'IsAccepted': [null],
    });
  }
  OnChange(event:any) {
    if(event.checked==true){
      this.IsAccepted = 1;
    }else{
      this.IsAccepted = 0;
    }
  }

  onFormSubmit(form:NgForm) {
    console.log(form);
    alert('Congrts !!! You Have Registred Successfully');
  }
}
