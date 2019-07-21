import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('localStorage','Aman Gupta');
    sessionStorage.setItem('sessionStorage','session Data');
  }

}
