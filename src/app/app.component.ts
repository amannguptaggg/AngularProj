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
}
CountryDetails:any[] =[
  {
    'country': 'India',
    'people' : [
      {
      "name" : "ajeet kumar",
      },
      {
        "name" : "Aman Gupta",
      }
        ,
      {
          "name" :"Rahul Singh",
      }
    ],
  },
  {
    'country': 'UK',
    'people' : [
      {
      "name" : "ABC",
      },
      {
        "name" : "EFG",
      }
        ,
      {
          "name" :"HIJ",
      }
    ],
  }
]

getCssClass(flag:string) {
  let cssclass;
  if(flag == "mode"){
    cssclass={
    'classOne': true,
    'classTwo' : true,
    }
  }else{
    cssclass={
      'classone':false,
      'classTwo': true,
    }
  }
  return cssclass;
}
}
