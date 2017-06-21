import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  // searchHero(keyword: string): Promise<Array<string>> {
  //   return this.http.get(`http://myjson.com/dj4dr`)
  //     .toPromise()
  //     .then(response => response
  //       .json()
  //       .filter(hero => hero.toLowercase().indexOf(keyword.toLowerCase()) !== -1));
  // }

  searchHero(keyword: string): Observable<Array<string>> {
    return this.http.get(`https://api.myjson.com/bins/ijdkv`)
      .map(response => response
        .json()
        .filter(hero => hero.toLowerCase().indexOf(keyword.toLowerCase()) !== -1));
  }
}
