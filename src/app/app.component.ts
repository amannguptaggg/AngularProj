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

employee : any[] = [
  {
    code: 'rh11',
    name: 'rahul',
    salary: 50000,
  },
  {
    code: 'sh1002',
    name: 'shachin',
    salary: 550000,
  },
  {
    code: 'mj11',
    name: 'Manoj',
    salary: 650000,
  },
  {
    code: 'su667',
    name: 'Subham',
    salary: 120002,
  }
]
}
