import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  show:boolean = false;

  constructor(private translate:TranslateService) { }

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

}
