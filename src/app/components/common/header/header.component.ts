import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  urlValues: any;
  loginData: any;
  loginStatus: boolean;
  constructor() { }

  ngOnInit() {
    this.loadHeaderChanges();
  }
  loadHeaderChanges() {
        this.urlValues = [
            {
                'urlLink': '/home',
                'urlName': 'HOME'
            },
            {
                'urlLink': '/about',
                'urlName': 'ABOUT'
            },
            {
                'urlLink': '/contact',
                'urlName': 'CONTACT'
            },
            {
                'urlLink': '/signin',
                'urlName': 'LOGIN'
            },
            {
                'urlLink':'/signup',
                'urlName':'REGISTER'
            }];
      } 
}

  


