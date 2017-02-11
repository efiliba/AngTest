import { Component, OnInit, AfterContentInit, ViewContainerRef, ViewChild } from '@angular/core';
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject } from 'rxjs/Rx';
// import 'rxjs';

@Component({
  template: `
    <template-storage></template-storage>
    <h1>Home Page</h1>
    <h3 *efSurround>
      <div *efList="item$ | async">Loading...</div>
    </h3>
    <template #templateRefName>
      <h3>Template Content - moved to end</h3>
    </template>
    <board columns=4 rows=3 isClosed="false"></board>
  `,
})
export class HomePageComponent implements OnInit {
  item$: Observable<any>;
  @ViewChild('templateRefName') template;

  constructor(private view: ViewContainerRef) { }

  ngOnInit() {
    this.item$ = Observable.interval(500).take(6).startWith(5);
  }

  ngAfterContentInit() {
    this.view.createEmbeddedView(this.template);
  }
}
