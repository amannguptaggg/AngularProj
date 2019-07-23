import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.css']
})
export class ParentCounterComponent implements OnInit {
  message:string;

  ngOnInit() {
    
  }


}
