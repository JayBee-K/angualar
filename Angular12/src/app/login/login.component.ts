import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public loginWeb = '';

  public handleLogin(type: any): void {
    this.loginWeb = type;
  }
}
