import { Component, OnInit } from '@angular/core';

import { Currency } from '../currency';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})                  
export class CurrenciesComponent implements OnInit {
  currencies: Currency[];
  currencies2: any;


  constructor( private currenciesService : CurrenciesService) { }

  ngOnInit() {
    this.getCurrencies2();
  }
  
  getCurrencies2(): void {
    this.currenciesService.getCurrenciesJson().subscribe(currencies => this.currencies2 = currencies);
  }
  
  getCurrencies(): void {
    //this.currenciesService.getCurrenciesTest().subscribe(currencies => this.currencies = currencies);
  }
  
  hack(currenciess) {
    return Array.from(currenciess);
  }
  
  

}
