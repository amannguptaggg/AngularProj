import { Component ,HostListener,Renderer, ElementRef} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Routing';


constructor(private el:ElementRef,private render:Renderer) {}
ngOnInit() { 
 
}

@HostListener('click') onclick() {
  alert('Clicked');
}

@HostListener('mouseover') mouseover() {
  this.ChnagebgColor('red');
}
@HostListener('mouseleave') onmouseleave() {
  this.ChnagebgColor('blue');
}

ChnagebgColor(color:string) {
  this.render.setElementStyle(this.el.nativeElement,'color',color);
}


}