import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Using Memory In Web API';
  ourBooks:string

  constructor(private bookService:BookService) {
  }

   ngOnInit() {
    
   }
  getBooks() {
  //  this.ourBooks = this.bookService.getBooksFromStore(200).pipe(map(book=>'Name:'+book.name));
   this.bookService.getBooksFromStore(100).pipe(map(book=>book.name)).subscribe(name=>{
this.ourBooks = name;
   });
  }
}
