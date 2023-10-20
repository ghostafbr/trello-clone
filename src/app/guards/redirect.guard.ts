import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "@services/token.service";

export const redirectGuard: CanActivateFn = () => {
  const isValidToken = inject(TokenService).isValidRefreshToken();
  const router = inject(Router);
  if (isValidToken) {
    router.navigate(['/app']);
  }
  return true;
};
