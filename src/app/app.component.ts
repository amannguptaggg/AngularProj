import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Using Memory In Web API';
  ourBooks:Observable<Book[]>

  constructor(private bookService:BookService) {
  }

   ngOnInit() {
    
   }
  getBooks() {
   this.ourBooks = this.bookService.getBooksFromStore();
  }
}
