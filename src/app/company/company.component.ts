import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let obj = {fnmae:'Aman',id:2}
    
    localStorage.setItem('UserId',JSON.stringify(obj));

    localStorage.setItem('localStorage','Ranuj ');
    sessionStorage.setItem('sessionStorage','session Data');


  }

}
