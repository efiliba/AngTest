import { Component, OnInit } from '@angular/core';
//import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs';

@Component({
  template: `
    <h1>Home Page</h1>
    <board columns=4 rows=3 isClosed="false"></board>
    <h2>{{item$ | async}}</h2>
  `,
})
export class HomePageComponent implements OnInit {
  item$: Observable<any>;

  ngOnInit() {
    this.item$ = Observable.interval(500).take(4);
  }
}
