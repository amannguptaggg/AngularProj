import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.clear();
    console.log(localStorage.getItem('localStorage'));
    console.log(sessionStorage.getItem('sessionStorage'));
    console.log(JSON.parse(localStorage.getItem('UserId')));
    if(window.localStorage) {
      alert('supported');
    }else {
      alert('Not supported');
    }

    if(sessionStorage.length>0) {
      alert('Data Found'+sessionStorage.length);
    }else {
      alert('Data not Found');
    }

  }


}
