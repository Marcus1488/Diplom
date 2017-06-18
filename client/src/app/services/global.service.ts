import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class GlobalService {
  itemValue = new Subject();

  constructor() {
    this.theToken = JSON.parse(localStorage.getItem('token'));
  }

  /*Сетер для встановленню токена при авторізації*/
  set theToken(token) {
    if (token) {
      this.itemValue.next(token);
      localStorage.setItem('token', JSON.stringify({token: token}));
    }
  }

  /*Гетер для токена*/
  get theToken() {
    return localStorage.getItem('token');
  }

  /*Видалення токена*/
  removeToken() {
    this.itemValue.next(false);
    localStorage.removeItem('token');
  }

}
