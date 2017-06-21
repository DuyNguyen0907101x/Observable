import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

const HEROES = ['Black Canary', 'Green Arrow'];

@Injectable()
export class WikipediaService {

  constructor(private jsonp: Jsonp) { }

  search(term: string): Observable<Array<string>> {
    return Observable.of(HEROES
      .filter(hero => hero.toLowerCase().indexOf(term.toLowerCase()) !== -1));
    // return new Observable(observer => )
    // var search = new URLSearchParams();
    // search.set('action', 'opensearch');
    // search.set('search', term);
    // search.set('format', 'json');
    // return this.jsonp
    //               .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
    //               .map(response => response.json()[1])
  }
}
