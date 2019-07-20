import { Injectable } from '@angular/core';
import { flatten } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  IsAdminRight():boolean{
    return false;
  }
}
