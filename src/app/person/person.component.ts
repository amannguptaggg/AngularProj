import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from '../company.service';
import { Book } from '../book';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
}
