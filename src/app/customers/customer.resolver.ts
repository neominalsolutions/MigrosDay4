import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<any> {

  constructor(private http:HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{

    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(response => response),
      catchError(err => of('Customer Load Error')),
      delay(200)
    );
  }
}
