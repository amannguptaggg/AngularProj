import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Routing';

  

constructor() {}
ngOnInit() { 
 $(document).ready(function(){
   $('.btnC').click(function(){
     $('.boxx').hide();
   })
 })
}

}
