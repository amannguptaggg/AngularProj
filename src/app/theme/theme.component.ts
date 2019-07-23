import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{

  @Input() myInput:string;

  @Output() myOutPut:EventEmitter<string> = new EventEmitter();

  outputString="Hy this is child component";
  constructor() { }
  sendData(){
    this.myOutPut.emit(this.outputString);
  }

  ngOnInit() {
  }

}
