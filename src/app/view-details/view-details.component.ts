import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

   book:Book = new Book();


  constructor(private router:ActivatedRoute,private bookService:BookServiceService,private location:Location) {}


  ngOnInit():void {

    alert(this.router.snapshot.params.id);
    this.bookService.getBook(parseInt(this.router.snapshot.params.id)).subscribe(book=>this.book=book);


    // this.router.paramMap.subscribe(params=>{
    //   alert(params.get('id'));
    //   this.bookService.getBook(parseInt(params.get('id'))).subscribe(book=>this.book = book);
    // });


  }
  goBack():void{
    this.location.back();
  }

}
