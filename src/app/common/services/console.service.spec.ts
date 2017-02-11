/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsolService } from './consol.service';

describe('ConsolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolService]
    });
  });

  it('should ...', inject([ConsolService], (service: ConsolService) => {
    expect(service).toBeTruthy();
  }));
});
