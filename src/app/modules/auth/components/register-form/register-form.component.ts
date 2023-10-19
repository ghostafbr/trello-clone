import {Component, inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
import {AuthService} from "@services/auth.service";
import {RequestStatus} from "@models/request-status.model";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {

  private authService = inject(AuthService);

  formUser = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
  });

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegister = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      return this.authService.registerAndLogin(name, email, password).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/app/boards']);
        },
        error: () => {
          this.status = 'failed';
        }
      });
    } else {
      this.form.markAllAsTouched();
      return false;
    }
  }

  validateUser() {
    if(this.formUser.valid) {
      this.statusUser = 'loading';
      const { email } = this.formUser.getRawValue();
      return this.authService.isAvailable(<string>email).subscribe({
        next: (resp) => {
          this.statusUser = 'success';
          if (resp.isAvailable) {
            this.showRegister = true;
            this.form.controls.email.setValue(<string>email);
          } else {
            this.router.navigate(['/login'], {
              queryParams: { email }
            });
          }
          return true;
        },
        error: () => {
          this.statusUser = 'failed';
          return false;
        }
      });
    } else {
      this.formUser.markAllAsTouched();
      return false;
    }
  }
}
