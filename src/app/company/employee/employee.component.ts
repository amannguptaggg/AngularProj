import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employee:any;
  constructor() {
    console.log('employee  list loaded');
   }

  ngOnInit() {
    this.employee=[
      {
        name:'Amit',
      },
      {
        name:'Raj Bahadur',
      },
      {
        name: 'Shivam'
      },
    {
      name: 'Ranjna',
    },
    {
      name: 'Shalu'
    }
    ]
  }

}
