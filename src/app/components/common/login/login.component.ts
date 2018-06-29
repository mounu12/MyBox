import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, CanActivate } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata: any = {};
  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit() {}
  signIn() {
      this.logindata.role = 'admin';
      this.cookieService.putObject('loginData', this.logindata);
      this.router.navigate(['admin/dashboard']);
  }

}