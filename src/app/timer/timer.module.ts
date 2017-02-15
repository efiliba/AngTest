import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import timerRoutes from './timer.routes';

@NgModule({
  imports: [
    CommonModule,
    timerRoutes
  ],
  declarations: [
    TimerComponent
  ]
})
export default class TimerModule { }
