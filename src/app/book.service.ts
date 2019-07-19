import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';

@Injectable() 

export class BookService {
 bookUrl="/api/books";

constructor(private http:HttpClient) {}

  createBook(book:Book):Observable<Book> {
 let httpheaders = new HttpHeaders()
 .set('content-type','application/json');

 let options={
   headers:httpheaders
 };

 return this.http.post<Book>(this.bookUrl,book,options);
 
}

  getBooksFromStore():Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}
