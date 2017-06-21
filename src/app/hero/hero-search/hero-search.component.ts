import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx'

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Array<string>>;
  keyword = new FormControl();


  constructor(private heroService: HeroService) {
    this.heroes = this.keyword.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(keyword => this.heroService.searchHero(keyword));
  }

  ngOnInit() {
  }
}
