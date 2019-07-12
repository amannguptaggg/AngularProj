import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Project';
  isvalid:boolean=true;

  btnValueHere(btnvalid) {
    this.isvalid = btnvalid;
  }


}
