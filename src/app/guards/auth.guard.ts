import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import {TokenService} from "@services/token.service";

export const authGuard: CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  if (!token) {
    inject(Router).navigate(['/login']);
    return false;
  }
  return true;
};
