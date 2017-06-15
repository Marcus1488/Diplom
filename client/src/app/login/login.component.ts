import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ApiServiceService} from "../services/api-service.service";
import {MdSnackBar} from '@angular/material';
import {Router} from "@angular/router";
import {GlobalService} from "../services/global.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  private errorMessage: string;

  constructor(private apiServiceService: ApiServiceService,
              private globalSrv: GlobalService,
              public snackBar: MdSnackBar,
              private router: Router) {
  }

  ngOnInit() {
  }

  /*Запит для авторізації*/
  auth() {
    this.apiServiceService.login(this.login, this.password)
      .subscribe(
        token => {
          this.globalSrv.theToken = token;
          this.router.navigate(['/']);
        },
        error => {
          this.errorMessage = <any>error;
          console.log(this.errorMessage);
          this.snackBar.open('Login or password invalid', '401.1', {
            extraClasses: ['custom-snackBar'],
            duration: 1000
          });
        });
  }

}
