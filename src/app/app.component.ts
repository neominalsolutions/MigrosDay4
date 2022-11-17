import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day4';

  /**
   *
   */
  constructor(public translate:TranslateService) {
  
      translate.addLangs(['tr','en']); // 2 farklı dil desteği var
      translate.setDefaultLang('en'); // ingilizce

    // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en'); // şuan ingilizce kullan

      // translate üzerindeki dil değişikliğini takibe alabiliyoruz
      this.translate.onLangChange.subscribe((lng:any) => {
        console.log('dil değişti', lng)
      })
    
  }

  onChange(event:any){
    console.log('lang', event.target.value);
    this.translate.use(event.target.value);

    console.log('current-lang', this.translate.currentLang);
  }


  getLangValue(){
    // typescript kullanım hali
    alert(this.translate.instant('HELLO',{value:'ahmet'}));

  
  }
}
