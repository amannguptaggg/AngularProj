import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(localStorage.getItem('localStorage'));
    console.log(sessionStorage.getItem('sessionStorage'));
  }

}
