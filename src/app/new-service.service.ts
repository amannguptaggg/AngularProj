import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }
 
  display() {
    return 'Hello Aman Gupta'
  }

}
