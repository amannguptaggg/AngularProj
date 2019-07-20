import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  IsAdminRight():boolean{
    return false;
  }

  IsChildRight():boolean{
    return false;
  }
}
