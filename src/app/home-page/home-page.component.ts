import { Component, OnInit, AfterContentInit, ViewContainerRef, ViewChild } from '@angular/core';
//import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs';

@Component({
  template: `
    <h1>Home Page</h1>
    <h3>
      <div *efList="item$ | async">Loading...</div>
    </h3>
    <template #foo>
      <h2>{{item$ | async}}</h2>
    </template>
    <board columns=4 rows=3 isClosed="false"></board>
    <!--h2>{{item$ | async}}</h2-->
  `,
})
export class HomePageComponent implements OnInit {
  item$: Observable<any>;
  @ViewChild('foo') template;

  constructor(private view: ViewContainerRef) { }

  ngOnInit() {
    this.item$ = Observable.interval(500).take(6).startWith(5);
  }

  ngAfterContentInit() {
    // this.view.insert(this.template);
    this.view.createEmbeddedView(this.template, {
      // $implicit: 'message'
    });
  }
}
