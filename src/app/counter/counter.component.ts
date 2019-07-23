import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  message:string="";
  counter:number = 0;

  constructor() { }

  increaseByOne() {
    this.counter = this.counter+1;
    this.message = 'counter'+this.counter;
  }

  decreaseByOne() {
    this.counter= this.counter -1;
    this.message = 'counter'+this.counter;
  }

  ngOnInit() {
  }

}
