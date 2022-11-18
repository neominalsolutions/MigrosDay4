import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { delay, map, Observable, tap } from 'rxjs';
import { ProfileService } from './login-page/profile.service';
import { SpinnerService } from './spinner/spinner.service';
import jwt_decode from "jwt-decode";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private profile:ProfileService, private spinner:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // next ile request işlendi ve süreç bir sonraki interceptore yada service'e bırakıldı.
    console.log('request', request);

    // angular interceptorlar request response pipeline da çalışan middleware yapılarıdır.
    // uygulamadaki kullanıcı login olduysa access_token bbilgisini her bir istek için buradan headera ekleriz.

    this.spinner.show();

    let token = this.profile.getToken();
    var decoded = jwt_decode(token); // aslında token decode olunca bize profile bilgisi döner.

    console.log('decoded_token', decoded);




    console.log('token', token);

    if(token != undefined) {
      let httpHeader = new HttpHeaders();
      httpHeader = httpHeader.append('Authorization',`Bearer ${token}`)

      let req = request.clone({
        headers: httpHeader
      })

      console.log('req', req)

      return next.handle(req).pipe(
        delay(1000),
        tap(()=> {
          this.spinner.hide();
        })
        );
    }

 
    // token yoksa var olan request atılıyor
    return next.handle(request).pipe(
      delay(1000),
      tap(()=> {
        this.spinner.hide();
      })
      );
  }
}
