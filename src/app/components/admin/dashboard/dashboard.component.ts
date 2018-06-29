import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headerBrandName: any = '';
  constructor(private router: Router, private cookieService: CookieService ) { }

  ngOnInit() {
    }
  terminalmanagement() {
  this.router.navigate(['admin/terminalmanagementsystem']);
  this.headerBrandName = 'Terminal Management System';
  this.cookieService.putObject('headerBrandName', this.headerBrandName);
  }

}
