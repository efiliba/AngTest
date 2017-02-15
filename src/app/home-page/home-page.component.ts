import { Component, OnInit, AfterContentInit, ViewContainerRef, ViewChild } from '@angular/core';
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs';
import { Http } from '@angular/http';

@Component({
  template: `
    <template-storage></template-storage>
    <h1>Home Page</h1>
    <h3 *efSurround>
      <div *efList="item$ | async">Loading...</div>
    </h3>
    <!--template #templateRefName>
      <h3>Template Content - moved to end</h3>
    </template>
    <board columns=4 rows=3 isClosed="false"></board-->
  `,
})
export class HomePageComponent implements OnInit, AfterContentInit {
  item$: Observable<any>;
  @ViewChild('templateRefName') template;

  constructor(private view: ViewContainerRef, private http: Http) { }

  ngOnInit() {
    this.item$ = Observable.interval(500).take(6).startWith(5);

    const observable = Observable.of(1, 2, 3, 4);
    // const result = multiplyByOperator(observable, 10);
    const result = calculateOperator<number, number>(observable, x => x * 10);
    result.subscribe(x => console.log(`next ${x}`), err => console.log(err), () => console.log('done'));


    // --------------------
    const numObservable = Observable.interval(1000).take(4);
    const higherOrderObservable = numObservable.map(x => Observable.of('a', 'b'));
    // higherOrderObservable.subscribe(obs => obs.subscribe(x => console.log(x)));
    // --------------------
    const clickObservable = Observable.fromEvent(document, 'click');
    const clockObservable = clickObservable.map(click => Observable.interval(1000));
    // clockObservable.subscribe(clock => clock.subscribe(x => console.log(x)));
    // --------------------
    // this.item$ = clockObservable.switch();
    // this.item$ = clockObservable.mergeAll();
    const finiteClockObservable = clickObservable.map(click => Observable.interval(1000).take(5));
    // this.item$ = finiteClockObservable.mergeAll(1); // concatAll()

    // this.item$ = clickObservable.switchMap(click => Observable.interval(1000));  // normal map + switch
    // --------------------
    const performRequest = () => this.http.get('https://jsonplaceholder.typicode.com/users/1').map(res => res.json());
    const responseObservable = clickObservable.switchMap(click => performRequest());
 //   responseObservable.subscribe(x => console.log(x.name));
    // --------------------
    const nameObservable = clickObservable.mergeMap(click => performRequest(), (click, res) => res.name); // flatMap
    nameObservable.subscribe(x => console.log(x));

    // --------------------
  }

  ngAfterContentInit() {
    // this.view.createEmbeddedView(this.template);
  }
}

const multiplyByOperator = (source: Observable<number>, multiplier: number): Observable<number> =>
  Observable.create(observer => {
    source.subscribe({
      next: x => observer.next(x * multiplier),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  });


const calculateOperator = <T, U>(source: Observable<T>, transformationFn: (T) => U): Observable<U> =>
  Observable.create(observer => {
    source.subscribe({
      next: x => observer.next(transformationFn(x)),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  });

//Observable.prototype['multiplyByOperator'] = multiplyByOperator;