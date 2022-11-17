import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile, ProfileService } from './login-page/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanLoad {

  constructor(private profile:ProfileService, private router:Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('this.profile.Authenticated', this.profile);


      

      if(this.profile.Authenticated == true){

        if(route.path?.startsWith('orders') && this.profile.getRoles().includes('order-manager'))
          return true;
        else if(route.path?.startsWith('customers') && this.profile.getRoles().includes('customer-manager'))
          return true;

      } 



      this.router.navigate(['access-denied']);

    return false;
  }
}
