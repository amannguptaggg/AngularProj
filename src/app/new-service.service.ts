import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  
  employee:any[];
  constructor() {
    this.employee= [
      {
        code: '0012',
        name: 'Aman',
      },
      {
        code: '0013',
        name: 'Shivam',
      },
      {
        code: '0014',
        name: 'Rahul',
      },
      {
        code: '0015',
        name: 'Neha Gupta',
      }
    ]
   }
 
  display() {
    return 'Hello Aman Gupta'
  }

}
