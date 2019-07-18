import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies:any;
  constructor() { 
  console.log('compnany List loaded');
  }

  ngOnInit() {
    this.companies=[
      {
        name:'Amazon',
      },
      {
        name:'Flipkart',
      },
      {
        name: 'Snapdeal'
      },
    {
      name: 'Wipro',
    },
    {
      name: 'Dell'
    }
    ]
  }

}
