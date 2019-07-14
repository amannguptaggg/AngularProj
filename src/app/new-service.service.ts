import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }
  student:any[];
    stu() {
 this.student=[
 {
   code:123,
   name:'Aman',
   phone: '987654'
 },
 {
  code:124,
  name:'Rahul',
  phone: '987334'
},
{
  code:125,
  name:'Neha',
  phone: '987632'
}
  ];
   return this.student;
    }
  

}
