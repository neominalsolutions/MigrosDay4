import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { forkJoin, map } from "rxjs";

export class MultiTranslateHttpLoader implements TranslateLoader {
  
    constructor(private http: HttpClient,
                public resources: { prefix: string, suffix: string }[] = [{
                  prefix: './assets/i18n-app/',
                  suffix: '.json'
                }]) {}
  
    public getTranslation(lang: string): any {
  
      return forkJoin(this.resources.map(config => {
        return this.http.get(`${config.prefix}${lang}${config.suffix}`);
      })).pipe((map(response => {
        return response.reduce((a, b) => {

          // console.log('json',Object.assign(a, b));
          return Object.assign(a, b);
        });
      })));
    }
  
  }
  
  export function LanguageServiceLoaderFactory(httpClient: HttpClient) {
    return new MultiTranslateHttpLoader(httpClient, [
      {prefix: './assets/i18n/admin/', suffix: '.json'},
      {prefix: './assets/i18n/cms/', suffix: '.json'},
    ]);
  
  }