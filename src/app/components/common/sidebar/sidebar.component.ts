import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  urlValues: any;
  urlSubvalues:any;
  constructor() { }

  ngOnInit() {
    this.loadSidebarChanges();
  }
  loadSidebarChanges(){
    this.urlValues=[
      {
        'urlLink': '/console',
        'urlName': 'Console'
      }],
      this.urlSubvalues=[
        {
          'urlName': 'Terminal',
          'icon' :'<i class="fa fa-chevron-down"></i>',
          terminalsubvalues:[{
            'urlName':'Device Management'
          },
          {
            'urlName':'Device Group'
          }
          ]
        }
      ]
  }
}
