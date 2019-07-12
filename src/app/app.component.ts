import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Project';
  checkIf = false;
  btnClickMe() {
    alert('you click Click me btn');
  }


}
