import { CanActivateFn } from '@angular/router';

export const intructorGuard: CanActivateFn = (route, state) => {
  return true;
};
