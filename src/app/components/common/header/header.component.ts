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
                'urlLink':'/login',
                'urlName':'Login'
            },
            {
                'urlLink': '/home',
                'urlName': 'sdmc',
                'icon' :' <i class="fa fa-edit modifypasswordicon"></i>'
            },
            {
                'urlLink': '/about',
                'urlName': 'Modify Password'
            },
            {
                'urlLink': '/contact',
                'urlName': 'Logout'
            },
        ];
    } 
}  


