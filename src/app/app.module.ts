import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { HeroSearchComponent } from './hero/hero-search/hero-search.component';

import { WikipediaService } from './wikipedia/wikipedia.service';
import { HeroService } from './hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [
    WikipediaService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
