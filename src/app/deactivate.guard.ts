import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from './merchant/merchant.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<MerchantComponent>{
  canDeactivate(component: MerchantComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return window.confirm('Are You Sure Want to leave?');
  }
 
}
