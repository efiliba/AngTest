import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
    <h1>Timer</h1>
    <button id='start'>Start</button>
    <button #stop>Stop</button>
    <!--<button (click)='onResetClicked($event)'>Reset</button>     // Replace events  -->
    <button #reset>Reset</button>
    <div #timer></div>
  `
})
export class TimerComponent implements OnInit {
  @ViewChild('stop') stopButton: ElementRef;
  @ViewChild('reset') resetButton: ElementRef;
  @ViewChild('timer') timer: ElementRef;

  ngOnInit() {
    const startButton = document.querySelector('#start');

    const start$: Observable<any> = Observable.fromEvent(startButton, 'click');
    const stop$ = Observable.fromEvent(this.stopButton.nativeElement, 'click');
    const reset$ = Observable.fromEvent(this.resetButton.nativeElement, 'click');
    const interval$ = Observable.interval(100);

    const intervalThatStops$ = interval$
      .takeUntil(stop$);

    const startInterval$ = start$
      .switchMapTo(intervalThatStops$);                 // Timer only starts when Start clicked
    
    const initialState: number = 0;
    const increment: (acc: number) => number = acc => acc + 1;
    const reset: (x: void) => number = () => initialState;

    const incrementOrReset$ = Observable.merge(         // increment or reset functions pushed through to stream
      intervalThatStops$.mapTo(increment), 
      reset$.mapTo(reset) 
    );

    start$
      .switchMapTo(incrementOrReset$)
      .startWith(initialState as any)
      .scan((acc: number, curr: (acc: number) => number) => curr(acc))
      .subscribe((x: number) =>
        this.timer.nativeElement.textContent = x
      );          
  }
}
