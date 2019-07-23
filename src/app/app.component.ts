import { Component ,HostListener,Renderer, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import * as $ from 'jquery';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Routing'
  vari='my name is aman';

  getData(value:any){
 alert(value);
  }


}