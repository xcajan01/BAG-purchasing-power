  import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Currency } from './currency';

/*
  http://apilayer.net/api/live

    ? access_key = YOUR_ACCESS_KEY
    & source = GBP
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1
      
*/




@Injectable()
export class CurrenciesService {
  private currencyUrl = 'http://www.apilayer.net/api/live?access_key=';  // URL to web api
  private accessKey = 'd169e5b604ecbe443848e6ca7c60ba57';
  
  

  constructor(private http: HttpClient) { }
  
  makeUrlRequest(): string {
    let resultString : string = "";
    resultString += this.currencyUrl;
    resultString += this.accessKey;
  
    return resultString;
  }
  
  /*
  getCurrencyDictionary(): void {
    //return this.getCurrenciesJson().quotes  
  }
  */
  
  getCurrenciesJson(): Observable<any> {
    return this.http.get(this.makeUrlRequest());
      //.map((res:any) => res.json());
      //.catch((error:any) => console.log(error));  
  }
  
  /*
  getCurrenciesTest(): Observable<Currency[]> {
    //let result : Observable<Currency>
    
    alert("Before");
    
    

    this.http.get(this.makeUrlRequest())
      .map(res => <Currency[]>res.json())
      //.subscribe(data => ){ }
      );

    
    let result : Observable<Any> = this.http.get(this.makeUrlRequest());
    
    //JSON.parse(result);  
    
    alert("After");
    
    return result;
  }
  */ 
  
  /*
  getCurrencies(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
  
    // http je deklarovane v konstruktoru
    return this.http.get(this.makeUrlRequest()).pipe(
        ,
        catchError(this.handleError('getHeroes', []))
      );
    // Puvodne:
    //return of(HEROES);
  }
  */

}
