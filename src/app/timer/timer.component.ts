import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
    <h1>Timer</h1>
    <button id='start'>Start</button>
    <button #stop>Stop</button>
    <button (click)='onResetClicked($event)'>Reset</button>
  `
})
export class TimerComponent implements OnInit {
  @ViewChild('stop') stopButton;

  constructor() { }

  ngOnInit() {
    const startButton = document.querySelector('#start');

    Observable.fromEvent(startButton, 'click')
      .subscribe(() => console.log('start clicked'));

    Observable.fromEvent(this.stopButton.nativeElement, 'click')
      .subscribe(() => console.log('stop clicked'));
  }

  onResetClicked(event) {
    console.log('reset clicked');
  }

}
