import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NewServiceService} from './new-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewServiceService]
})
export class AppComponent {
  title = 'My New Project';
  text: string;
  emp: any[];

 constructor(private _newService:NewServiceService) {}
 ngOnInit() {
   this.emp = this._newService.employee;
   this.text = this._newService.display();
 }
}
