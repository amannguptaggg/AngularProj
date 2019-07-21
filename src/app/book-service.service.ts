import { Injectable } from '@angular/core';
import {Book} from './book';
import {Observable, from} from 'rxjs';
import {map} from 'rxjs/operators';
import {of as useOf } from 'rxjs';

@Injectable()

export class BookServiceService {
  BOOKS:Book[]=[
    {
       'id':1,
       'name':'JavaScript',
       'price':'2100',
       'description': 'JavaScript Tutorial',
    },
    {
      'id':2,
      'name':'Core Java',
      'price':'2500',
      'description': 'Core Java Tutorial',
   }
   ,
   {
    'id':3,
    'name':'Angular 8.0',
    'price':'5600',
    'description': 'Angular full Tutorial',
 },
 {
  'id':1,
  'name':'Python',
  'price':'3500',
  'description': 'Python Full Tutorial',
}
  ];

  getBooks():Observable<Book[]>{
    return useOf(this.BOOKS);
  }

  getBook(id: number):Observable<Book>{
      return this.getBooks().pipe(map(books=>books.find(book=> book.id === id)));
  }
}
