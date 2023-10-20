import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import {TokenService} from "@services/token.service";

export const authGuard: CanActivateFn = () => {
  const isValidToken = inject(TokenService).isValidRefreshToken();
  console.log('From AuthGuard', isValidToken);
  if (!isValidToken) {
    inject(Router).navigate(['/login']);
    return false;
  }
  return true;
};
