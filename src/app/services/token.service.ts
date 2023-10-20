import { Injectable } from '@angular/core';
import {setCookie} from "typescript-cookie";
import {getCookie, removeCookie} from "typescript-cookie";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    setCookie('token-trello', token, {expires: 365, path: '/'});
  }

  getToken() {
    return getCookie('token-trello');
  }

  removeToken() {
    removeCookie('token-trello');
  }

}