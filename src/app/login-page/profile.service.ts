import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Profile {
  email:string;
  token:string;
  roles:string[];
}

// amaç profile service üzerinden diğer componentlere bazı profile bilgilerini aktarabilmek onlara merkezi bir store mekanizmasında bağlanmak. Global olarak rxjs ile state management yapmış olduk


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // ilk değer ataması
  // global olarak bir state management yapacağımız bir servis
  // farklı componentler üzerinden aynı translate service onLang eventinde olduğu gibi profile bilgisi çekeceğiz.
  profile$:BehaviorSubject<Profile> = new BehaviorSubject<Profile>({} as Profile);
  authenticated$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }




  setProfile(profile:Profile){
    // state de profile$ tanımlanmış olan bir değişkene globalden erişlecek olan bir değer atadık
    localStorage.setItem('profile', JSON.stringify(profile));

    this.profile$.next(profile);
    this.authenticated$.next(true);
  }

  // logut olunca profile service stateden temizlemek için kullandık
  reset():void {
    localStorage.removeItem('profile');
    this.profile$.next({} as Profile); // default değere geri döndürdük
    this.authenticated$.next(false);
  }

 private checkLocalStorage():void {

  let storage:any = localStorage.getItem('profile');

  // console.log('storage', storage);

  if(localStorage.getItem('profile') != undefined && this.profile$.getValue() != {} as Profile) {
    
    let _profile = JSON.parse(storage) as Profile;
    console.log('_profile', _profile);

    this.profile$.next(_profile);
    this.authenticated$.next(true);
  } else {
    this.profile$.next({} as Profile);
    this.authenticated$.next(false);
  }
 }


  getEmail(){
    this.checkLocalStorage();
    return this.profile$.getValue().email;
  }

  getRoles(){
    this.checkLocalStorage();
    return this.profile$.getValue().roles;
  }

  getToken(){
    this.checkLocalStorage();
    return this.profile$.getValue().token;
  }

  // property tanımlama işlemi
  public get Authenticated() {
    this.checkLocalStorage();
    return this.authenticated$.getValue();
  }
  

  

}
