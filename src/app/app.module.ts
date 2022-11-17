import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LanguageServiceLoaderFactory } from './MultiTranslateHttpLoader';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessDeniedPageComponent } from './access-denied-page/access-denied-page.component';
import { PermissionDirective } from './permission.directive';
import { SharedModule } from './shared/shared.module';



// assets altında i18n json dosyalarına bakar. varsıylan lokasyon

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// assets dışında başka bir sunucu üzerinde de cdn olarak çekebiliriz.
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    LoginPageComponent,
    AccessDeniedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: LanguageServiceLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
