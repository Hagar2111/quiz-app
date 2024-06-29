/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuezzesService } from './quezzes.service';

describe('Service: Quezzes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuezzesService]
    });
  });

  it('should ...', inject([QuezzesService], (service: QuezzesService) => {
    expect(service).toBeTruthy();
  }));
});
