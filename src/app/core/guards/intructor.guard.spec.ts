import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { intructorGuard } from './intructor.guard';

describe('intructorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => intructorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
