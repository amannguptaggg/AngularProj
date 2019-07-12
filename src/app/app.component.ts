import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Project';
Student : any[] = [
  {
    'name':'Aman'
  },
  {
    'name' :'Rahul'
  },
  {
    'name' : 'Mahesh'
  },
  {
    'name': 'Golu'
  }
]


}
