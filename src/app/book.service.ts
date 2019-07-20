import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';

@Injectable() 

export class BookService {
 bookUrl="/api/books";

constructor(private http:HttpClient) {}

getBookById(bookId:string) {
return this.http.get<Book>(this.bookUrl+'/'+bookId);
}

createBook(book:Book):Observable<Book> {
 let httpheaders = new HttpHeaders()
 .set('content-type','application/json');

 let options={
   headers:httpheaders
 };

 return this.http.post<Book>(this.bookUrl,book,options);
 
}


updateBook(book:Book):Observable<number> {
  let httpheaders = new HttpHeaders()
  .set('content-type','application/json');
 
  let options={
    headers:httpheaders
  };
 
  return this.http.put<number>(this.bookUrl+'/'+book.id,book,options);
  
 }

 DeleteBook(bookId:string):Observable<number> {
  let httpheaders = new HttpHeaders()
  .set('content-type','application/json');
 
  let options={
    headers:httpheaders
  };
 
  return this.http.delete<number>(this.bookUrl+'/'+bookId);
  
 }




  getBooksFromStore():Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}
