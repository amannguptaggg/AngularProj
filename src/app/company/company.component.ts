import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  books:Observable<Book[]>

  constructor(private _bookService:CompanyService) { }

  ngOnInit() {
  this.books=this._bookService.getBooks();
  }

}
