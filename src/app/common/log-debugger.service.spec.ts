/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogDebuggerService } from './log-debugger.service';

describe('LogDebuggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDebuggerService]
    });
  });

  it('should ...', inject([LogDebuggerService], (service: LogDebuggerService) => {
    expect(service).toBeTruthy();
  }));
});
