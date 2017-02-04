import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import experimentRoutes from './experiment.routes';

import { ConsoleService } from '../common/console.service';
import { LogDebugger } from '../common/log-debugger.service';

import { JQUERY_TOKEN, TOASTR_TOKEN, SimpleModalComponent, ModalTriggerDirective } from '../common/index';

let jQuery: JQuery = window['jQuery'];
let toastr: Toastr = window['toastr'];

@NgModule({
  imports: [
    CommonModule,
    experimentRoutes
  ],
  declarations: [
    ModalTriggerDirective,
    SimpleModalComponent,
    TestComponent
  ],
  providers: [
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: (consoleService: ConsoleService) => new LogDebugger(consoleService, true),
      deps: [ConsoleService]
    },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr }
  ]
})
export default class ExperimentModule { }
