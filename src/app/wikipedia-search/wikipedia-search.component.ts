import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WikipediaService } from '../wikipedia/wikipedia.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.scss']
})
// export class WikipediaSearchComponent implements OnInit {
//   items: Array<string>;
//   defaultKeyword = 'Killer Frost';
//
//   constructor(private wikipediaService: WikipediaService) { }
//
//   search(term): void {
//     this.wikipediaService.search(term)
//       .then(items => this.items = items)
//   }
//
//   ngOnInit() {
//     this.search(this.defaultKeyword);
//   }
// }

export class WikipediaSearchComponent implements OnInit {
  items: Observable<Array<string>>;
  term = new FormControl();
  defaultKeyword = 'Killer Frost';

  constructor(private wikipediaService: WikipediaService) { }

  // search(term): void {
  //   this.wikipediaService.search(term)
  //     .subscribe(items => this.items = items)
  // }

  ngOnInit() {
    // this.search(this.defaultKeyword);
    this.items = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.search(term));
  }
}
