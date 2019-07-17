import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
   companys:any;
  constructor() { }

  ngOnInit() {
    this.companys=[
      {
        'code':'0123',
        'name':'Dell'
      },
      {
        'code':'3344',
        'name':'Wipro'
      },
    ]
  }

}
