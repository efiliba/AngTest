import { Component, OnInit, Inject } from '@angular/core';
import { TOASTR_TOKEN } from '../../common/index';
import { ActivatedRoute, Router } from '@angular/router';

import { LogDebugger } from '../../common/services/log-debugger.service';

import { Observable, Subject } from 'rxjs/Rx';
import { setInterval } from "timers";

@Component({
  template: `
    <div class="well" modal-trigger="simple-modal">
      {{title}}
      <button class="btn btn-primary" (click)="navigateHome()">Click to navigate home from code</button>
    </div>

    <simple-modal elementId="simple-modal" title="Modal Title">
      <h4>Hello Modal</h4>
    </simple-modal>
  `
})
export class TestComponent implements OnInit {
  title = `Test Page - click for modal`;

  constructor(
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private logDebugger: LogDebugger,
    private route: ActivatedRoute,
    private router: Router) {
  }
  
  ngOnInit() {
    this.logDebugger.debug('Test Component loaded');
    this.toastr.success(`Route parameter: ${this.route.snapshot.params['id']}`);
    this.toastr.error(`jQuery version: ${jQuery.fn.jquery}`);

    // this.singleObserver();
    // this.multipleExecutions();
    // this.bridgeObservers();
    // this.bridgeObserversClass();
    // this.subjectObservers();
    // this.subjectSendValue();
    // this.multicast();
    this.multicastSelectorSandbox();
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  singleObserver() {
    const observable = Observable.interval(1000).take(5);

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    observable.subscribe(observerA);
  }

  multipleExecutions() {
    const observable = Observable.interval(1000).take(5);

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    observable.subscribe(observerA);

    const observerB = {
      next: x => console.log(`B next ${x}`),
      error: err => console.log(`B error ${err}`),
      complete: () => console.log('B done')
    };

    setTimeout(() => observable.subscribe(observerB), 2000);
  }

  bridgeObservers() {
    const observable = Observable.interval(1000).take(5);

    const bridgeObserver = {
      observers: [],
      addObserver: observer => bridgeObserver.observers.push(observer),
      next: x => bridgeObserver.observers.forEach(o => o.next(x)),
      error: err => bridgeObserver.observers.forEach(o => o.error(err)),
      complete: () => bridgeObserver.observers.forEach(o => o.complete())
    };

    observable.subscribe(bridgeObserver);

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    bridgeObserver.addObserver(observerA);

    const observerB = {
      next: x => console.log(`B next ${x}`),
      error: err => console.log(`B error ${err}`),
      complete: () => console.log('B done')
    };

    setTimeout(() => bridgeObserver.addObserver(observerB), 2000);
  }

  bridgeObserversClass() {
    const observable = Observable.interval(1000).take(5);

    class BridgeObserver {
      observers = [];

      addObserver(observer) {
        this.observers.push(observer);
      }

      next(x) {
        this.observers.forEach(o => o.next(x));
      }

      error(err) {
        this.observers.forEach(o => o.error(err));
      }

      complete() {
        this.observers.forEach(o => o.complete());
      }
    }

    const bridgeObserver = new BridgeObserver();
    observable.subscribe(bridgeObserver);

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    bridgeObserver.addObserver(observerA);

    const observerB = {
      next: x => console.log(`B next ${x}`),
      error: err => console.log(`B error ${err}`),
      complete: () => console.log('B done')
    };

    setTimeout(() => bridgeObserver.addObserver(observerB), 2000);
  }

  subjectObservers() {
    const observable = Observable.interval(1000).take(5);

    const subject = new Subject();

    observable.subscribe(subject);

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    subject.subscribe(observerA);

    const observerB = {
      next: x => console.log(`B next ${x}`),
      error: err => console.log(`B error ${err}`),
      complete: () => console.log('B done')
    };

    setTimeout(() => subject.subscribe(observerB), 2000);
  }

  subjectSendValue() {
    const subject = new Subject();

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    subject.subscribe(observerA);

    const observerB = {
      next: x => console.log(`B next ${x}`),
      error: err => console.log(`B error ${err}`),
      complete: () => console.log('B done')
    };

    setTimeout(() => subject.subscribe(observerB), 2000);

    subject.next(0);
    subject.next(1);
    subject.next(2);
    let i = 3;
    setInterval(() => subject.next(`Send value into subject: ${i++}`), 1000);
  }

  multicast() {
    const connectableObservable = Observable.interval(1000)
      .take(5)
      .multicast(new Subject());

    const observerA = {
      next: x => console.log(`A next ${x}`),
      error: err => console.log(`A error ${err}`),
      complete: () => console.log('A done')
    };

    connectableObservable.connect();

    connectableObservable.subscribe(observerA);

    const observerB = {
      next: x => console.log(`B next ${x}`),
      error: err => console.log(`B error ${err}`),
      complete: () => console.log('B done')
    };

    setTimeout(() => connectableObservable.subscribe(observerB), 2000);
  }

  multicastSelectorSandbox() {
    const subjectFactory = () => new Subject();

    const selectorSandbox = shared => {
      const observerA = {
        next: x => console.log(`A next ${x}`),
        error: err => console.log(`A error ${err}`),
        complete: () => console.log('A done')
      };

      shared.subscribe(observerA);

      const observerB = {
        next: x => console.log(`B next ${x}`),
        error: err => console.log(`B error ${err}`),
        complete: () => console.log('B done')
      };

      setTimeout(() => shared.subscribe(observerB), 2000);

      return shared;
    }

    const result = Observable.interval(1000)
      // .take(5)
      .map(x => `${x}: ${Math.random()}`)
      .multicast(subjectFactory, selectorSandbox);

    const sub = result.subscribe(x => console.log(x));
    setTimeout(() => sub.unsubscribe(), 5000);
  }
}
