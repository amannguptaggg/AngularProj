import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Project';
Student : any[];
 constructor() {
   this.Student = [
     {
       stdentId:1,
       name:'Aman',
       gender:'Male',
       age: 20,
       Course:'MCA'
     },
     {
      stdentId:2,
      name:'Ajit',
      gender:'Male',
      age: 21,
      Course:'BCA'
    },
    {
      stdentId:3,
      name:'Swati',
      gender:'Female',
      age: 18,
      Course:'B.sc'
    }
   ];
 }
getMore():void {
  this.Student = [
    {
      stdentId:1,
      name:'Aman',
      gender:'Male',
      age: 20,
      Course:'MCA'
    },
    {
     stdentId:2,
     name:'Ajit',
     gender:'Male',
     age: 21,
     Course:'BCA'
   },
   {
     stdentId:3,
     name:'Swati',
     gender:'Female',
     age: 18,
     Course:'B.sc'
   },
   {
    stdentId:4,
    name:'Ranuj',
    gender:'Male',
    age: 20,
    Course:'B.pharma'
  }
  ]
}

trackBystdentId(index:number,student:any):string{
 return student.stdentId;
}

}
