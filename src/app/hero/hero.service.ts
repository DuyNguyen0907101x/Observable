import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  // searchHero(keyword: string): Promise<Array<string>> {
  //   return this.http.get(`https://api.myjson.com/bins/ijdkv`)
  //     .toPromise()
  //     .then(response => response
  //       .json()
  //       .filter(hero => hero.toLowercase().indexOf(keyword.toLowerCase()) !== -1));
  // }

  searchHero(keyword: string): Observable<Array<string>> {
    return this.http.get(`https://api.myjson.com/bins/ijdkv`)
      .map(response => {
        return response
          .json()
          .filter(hero => hero.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
      });
  }

  getHeroes(): Observable<Array<string>> {
    return this.http.get(`https://api.myjson.com/bin/ijdkv`)
      .map(response => {
        return response
          .json()
      })
      .catch(err => {
        let errMsg = `${err.status} - ${err.statusText}`;
        return Observable.throw(errMsg);
      });
  }
}
