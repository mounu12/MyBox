import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    urlValues: any;
    loginData: any;
    loginStatus: boolean;
    constructor(private router: Router , private cookieService: CookieService ) { }

    ngOnInit() {
        this.loadLoginData();
        this.loadHeaderChanges();
    }
    loadLoginData() {
        this.loginData = this.cookieService.getObject('loginData');
    }
    loadHeaderChanges() {
        if (this.loginData) {
            if (this.loginData.role === 'admin') {
                this.loginStatus = true;
                this.urlValues = [
                    {
                        'urlLink': '/home',
                        'urlName': 'My Box',
                        'icon' : '<i class="fa fa-user sdmcicon"></i>'
                    },
                    {
                        'urlLink': '/about',
                        'urlName': 'Modify Password',
                        'icon' : '<i class="fa fa-edit modifypasswordicon"></i>'
                    },
                    // {
                    //     'urlLink': '/contact',
                    //     'urlName': 'Logout',
                    //     'icon' : '<i class="fa fa-power-off logouticon">'
                    // },
                ];
            }
        } else {
            this.loginStatus = false;
            this.urlValues = [
                {
                    'urlLink': '/login',
                    'urlName': 'Login'
                } ];
            }
    }
    logout() {
        console.log('logout');
        this.cookieService.removeAll();
        this.loadHeaderChanges();
        window.location.reload();
        this.router.navigate(['login']);
    }
}


