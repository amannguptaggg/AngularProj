import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators'
import {FormGroup,FormBuilder,Validator, Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Using Memory In Web API';
  datasaved = false;
  bookForm: FormGroup;
  allBooks:Observable<Book[]>

  constructor(private _formBuilder:FormBuilder,private bookService:BookService) {
  }

   ngOnInit() {
    this.bookForm = this._formBuilder.group({
      name:['',[Validators.required]],
      catgegory:['',[Validators.required]],
      writer:['',[Validators.required]]
    });
    this.getBooks();
   }

   onFormSubmit(){
     this.datasaved = false;
     let book = this.bookForm.value;

     this.createBooks(book);
     this.bookForm.reset();
   };

   createBooks(book:Book) {
     this.bookService.createBook(book).subscribe(
       book=>{
         this.datasaved=true;
         this.getBooks()
       }
     )
   }
  getBooks() {
  //  this.ourBooks = this.bookService.getBooksFromStore(200).pipe(map(book=>'Name:'+book.name));
  this.allBooks = this.bookService.getBooksFromStore();

   }

}
