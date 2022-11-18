import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile, ProfileService } from './login-page/profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  

  constructor(private http:HttpClient, private profile:ProfileService) { }



  getUsers(){


    return this.http.get('https://reqres.in/api/users?page=2')
    
    // let token = this.profile.getToken();

    // console.log('token', token);

    // let headers = new HttpHeaders();

    // if(token != undefined){
    //   headers = headers.append('Authorization',`Bearer ${token}`)
    // }

    
    // return this.http.get('https://reqres.in/api/users?page=2',{headers:headers})
  }
}
