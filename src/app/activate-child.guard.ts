import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateChildGuard implements CanActivateChild {
    
  constructor(private userService:UserService,private router:Router) {}


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userService.IsChildRight()) {
      return true;
    }else {
      alert('You dont have permission to view this child page,Redirecting Home');
      this.router.navigate(['home']);
      return false;
    }
  }
  
}
