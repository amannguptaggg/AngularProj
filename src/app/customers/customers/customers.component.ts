import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer:any;
  constructor() { }

  ngOnInit() {
    this.customer=[
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
