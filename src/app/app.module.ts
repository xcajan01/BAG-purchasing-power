import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './currencies.service';
import { ValuesPipe } from './values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    ValuesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
