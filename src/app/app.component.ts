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
  title='Using Memory In';
  datasaved = false;
  bookForm: FormGroup;
  allBooks:Observable<Book[]>;
  bookIdToUpdate=null;

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

   updateBook(bookId:string){
     this.bookService.getBookById(bookId).subscribe(book=>{
       this.bookIdToUpdate= bookId;
       this.bookForm.controls['name'].setValue(book.name);
       this.bookForm.controls['catgegory'].setValue(book.catgegory);
       this.bookForm.controls['writer'].setValue(book.writer);
      });

   }


   deleteBook(bookId:string) {
     this.bookService.DeleteBook(bookId)
     .subscribe(book=>{
       this.getBooks();
     });
   }

   onFormSubmit(){
     this.datasaved = false;
     let book = this.bookForm.value;

     this.createBooks(book);
     this.bookForm.reset();
   };

   createBooks(book:Book) {
     if(this.bookIdToUpdate==null){
     this.bookService.createBook(book).subscribe(
       book=>{
         this.datasaved=true;
         this.getBooks()
         this.bookIdToUpdate = null;
       }
     )
      } else {
       book.id = this.bookIdToUpdate;
       this.bookService.updateBook(book)
       .subscribe(book=>{
        this.datasaved = true;
        this.getBooks();
        this.bookIdToUpdate = null;
       })
      }
   }
  getBooks() {
  //  this.ourBooks = this.bookService.getBooksFromStore(200).pipe(map(book=>'Name:'+book.name));
  this.allBooks = this.bookService.getBooksFromStore();

   }

}
