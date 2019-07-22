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

  books:Observable<Book[]>

  constructor(private _bookService:CompanyService,private router:Router) { }

  ngOnInit() {
  this.books=this._bookService.getBooks();
  }

  close() {
    this.router.navigate([{outlets:{bookList:null}}])
  }

}
