import { Component } from '@angular/core';
import {GlobalService} from "app/services/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token = JSON.parse(localStorage.getItem('token'));

  constructor(private globalSrv: GlobalService) {
    globalSrv.itemValue.subscribe((token) => {
      this.token = token;
    })
  }

  /*Функція для виходу із режиму адміністратора*/
  logout() {
    this.globalSrv.removeToken();
  }
}
