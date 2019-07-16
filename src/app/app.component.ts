import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My New Project';
   FormGroup:FormGroup;
   TotalRow:number;

   constructor(private _fb:FormBuilder){

   }

   ngOnInit():void {
    this.FormGroup = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });
}

initItemRow() {
  return this._fb.group({
      Name:[''],
      Rollno:[''],
      Class:[''],
      Mobile:['']
  });
}

addNewRow() {
  const control = <FormArray>this.FormGroup.controls['itemRows'];
  control.push(this.initItemRow());
}

deleteRow(index:number) {
  const control  = <FormArray> this.FormGroup.controls['itemRows'];
    if(control != null) {
      this.TotalRow = control.value.length;
    }

    if(this.TotalRow > 1) {
      control.removeAt(index);

    } else {
      alert('One record is mendatory');
      return false;
    }
}

}
