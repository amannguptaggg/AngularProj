import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Using In Momory Web API';
  ourBooks:Book[];

  constructor(private bookService:BookService) {
  }

   ngOnInit() {
     this.getBooks();
   }
  getBooks() {
    this.bookService.getBooksFromStore().subscribe(books=>this.ourBooks=books);
  }
}
