import { Component ,HostListener,Renderer, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import * as $ from 'jquery';
import { CounterComponent } from './counter/counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Routing';
  appComponentRef:any;

@ViewChild('loadComponent',{read:ViewContainerRef,static:false}) entry:ViewContainerRef;
constructor(private resolver:ComponentFactoryResolver) {}

createComponent(id:number) {
this.entry.clear();
if(id == 1){
  const factory = this.resolver.resolveComponentFactory(CounterComponent);
  this.appComponentRef = this.entry.createComponent(factory);
}else if(id == 2){
  const factory = this.resolver.resolveComponentFactory(ParentCounterComponent);
  this.appComponentRef = this.entry.createComponent(factory);
}
}
destoryComponent() {
  this.appComponentRef.destroy();
}

data = [
  {
    'id':1,
    'name':'Student Information'
  },
  {
    'id':2,
    'name':'Parent Info'
  
  }
]
 selectName(id:number) {
this.createComponent(id);
 }



}