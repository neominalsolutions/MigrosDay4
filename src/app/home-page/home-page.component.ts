import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../login-page/login.service';
import { ProfileService } from '../login-page/profile.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  show:boolean = false;

  constructor(private translate:TranslateService, public profile:ProfileService, private loginService:LoginService) { }

  ngOnInit(): void {

    // dil değişince TranslateService sayesinde farklı componetler üzerinden değişiklik yapabiliriz.
    this.translate.onLangChange.subscribe((data:any)=> {
      if(data.lang == 'tr'){
        this.show = true;
      } else {
        this.show = false;
      }
    })
    
  }

  logOut(){
    this.loginService.logout();
  }

}
