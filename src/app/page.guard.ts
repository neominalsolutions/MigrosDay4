import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './login-page/profile.service';


// yani page guard page componentler için geçerli bir kullanımı
// bir componente erişirken yetkimiz var mı yok mu kontrolü yaparız.
// module'e girdi ama bazı sayfalara giremez

// CanDeactivate inteface ile de componentten ayrılırken kullanıcıyı bilgiflendirip bir işlem yapmadan componentten ayrılmasını engelleyebiliriz.
// formun bilgileri dolu ise formu save yapmadan çıkma.

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {

  // componente istek atıldığı anda devreye girer.

  constructor(private profile:ProfileService, private router:Router) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('pagePermission',((route.data) as any).pagePermission);


      if(this.profile.getPermissions().includes(((route.data) as any).pagePermission)){
        return true;
      }

      this.router.navigate(['access-denied']);
    
    return false;
  }
  
}
