import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { off } from 'process';
import { catchError, map, of, retry, tap } from 'rxjs';
import { Profile, ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private profileService:ProfileService, private router:Router) { }

  login(param:any){

    // rxjs pipe ile birden fazla operatör ile çalıaşabiliriz. her bir operatör birbilerine , ile bağlanır
    return this.http.post('https://reqres.in/api/login', param).pipe(
     
      map((response:any) => {

        console.log('map', response);

        const JwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJldmUuaG9sdEByZXFyZXMuaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.FwKx27Gx3r6mpWklHpWVrEbXGlJNk7Tp0C2IYCxdumU'
     
          return {
            email:param.email,
            roles:['order-manager','customer-manager'],
            permissions:['InvoiceRead','InvoiceCopy','DownloadInvoiceReport'],
            token:JwtToken
          }
        
      }),
      tap((response:any)=> {
        // audit işlemi için tercih ederiz.
        console.log('tap', response);
        // localstorage üzerinde login bilgilerini set et
      
        // uygulama hard reload olmadığı sürece ben bilgilere state üzerinden oluşacağım.
        // ama uygulama reload olursa localstorage tan bilgiler varsa getirip state güncelleyeceğim
        this.profileService.setProfile(response as Profile);

          this.router.navigate(['home']);
        }),

      
        
      catchError(err => {
        return  of(err);
      }),
      retry({count:3,delay:100})
    
    )
  }

  logout(){
    this.profileService.reset();
    window.location.href = "/login";
    // this.router.navigate(['login']);
  }
}


// of operatör observable tipinde mock data döndürmemiz sağlar
// service call işleminde http error varsa catchError operatör ile yakalarız
// map operatör ise veriyi manupule edip değiştirmek için kullanılıyor. Ver subscribe olmadan önce bazı operatörler ile veri üzerinde oynama yapabiliriz.
// tap audit amaçlı yada araya girip bir eylem gerçekleştirmemiz sağlar.
// eğer api ulaşılamaz ise retry işlemi ile 100 ms bir 3 kere dene istek atamyı demek.