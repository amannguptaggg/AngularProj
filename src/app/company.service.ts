import { Injectable } from '@angular/core';
import {Book} from './book';
import { Observable } from 'rxjs';
import {of as ObOf } from 'rxjs';

const BOOK:Book[]=[
  {
    'id':1,
    'name':'Aman',
    "author":'Aman',
    'price': 224,
  },
  {
    'id':2,
    'name':'Ranuj Book',
    "author":'Ranuj',
    'price': 223,
  },
  {
    'id':3,
    'name':'Rahul book',
    "author":'Rahul',
    'price': 2234,
  }
]

let booksObservable = ObOf(BOOK);

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  getBooks():Observable<Book[]> {
  return booksObservable;
  }


  constructor() { }
}
