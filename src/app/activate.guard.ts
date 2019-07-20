import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

     constructor(private _userService:UserService,private router:Router) {}
  
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this._userService.IsAdminRight()) {
      return true;
    }else {
      alert('You Dont Have permission To View Page,Redirecting To Home');
    this.router.navigate(['home']);
    }
  }
  
}
