import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   books:Book[];

  constructor(private bookService:BookServiceService) { }

 getBooks():void {
   this.bookService.getBooks().subscribe(books=>this.books=books);
 }

 ngOnInit():void {
   this.getBooks();
 }

}
