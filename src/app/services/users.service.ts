import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {TokenService} from "@services/token.service";
import {User} from "@models/user.model";
import {checkToken} from "@interceptors/token.interceptor";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject(HttpClient);
  apiUrl = environment.API_URL;
  private tokenService = inject(TokenService);

  constructor() {
  }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, {context: checkToken()});
  }
}
