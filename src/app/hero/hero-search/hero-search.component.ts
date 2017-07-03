import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  title: string = `Search for Hero's name`;
  qrCodeData: string = `https://www.chatwork.com`;
  heroes: Array<string>;
  keyword = new FormControl();


  constructor(private heroService: HeroService) {
    this.keyword.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(keyword => this.heroService.searchHero(keyword))
      .subscribe(heroes => this.heroes = heroes);

    // this.heroes = this.keyword.valueChanges
    //   .debounceTime(400)
    //   .distinctUntilChanged()
    //   .switchMap(keyword => this.heroService.searchHero(keyword));
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
  }
}
