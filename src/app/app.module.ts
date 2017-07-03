import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { HeroSearchComponent } from './hero/hero-search/hero-search.component';

import { HeroService } from './hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
