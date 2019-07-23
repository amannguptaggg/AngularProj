import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit,AfterViewInit {

  @ViewChild('name',{static:false}) el :ElementRef;
  @ViewChild('state',{static:false}) elem:ElementRef;


  ngAfterViewInit(): void {
     
    this.el.nativeElement.style.backgroundColor="black";
    this.el.nativeElement.style.color="white";

    this.elem.nativeElement.style.backgroundColor="blue";
    this.elem.nativeElement.style.color="orange";

  }

  constructor() { }

  ngOnInit() {
  }

}
