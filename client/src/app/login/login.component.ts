import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ApiServiceService} from "../services/api-service.service";
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  private errorMessage: string;

  constructor(private apiServiceService: ApiServiceService, public snackBar: MdSnackBar) {
  }

  ngOnInit() {
  }

  auth() {
    this.apiServiceService.login(this.login, this.password)
      .subscribe(
        token => {
          localStorage.setItem('token', JSON.stringify({token: token}));
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
