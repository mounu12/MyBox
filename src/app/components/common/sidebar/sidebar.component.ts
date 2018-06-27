import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  urlValues: any;
  urlSubvalues: any;
  constructor() { }

  ngOnInit() {
    this.loadSidebarChanges();
  }
  loadSidebarChanges() {
    this.urlValues = [
      {
        'urlLink': 'dashboard',
        'urlName': 'Dashboard'
      }],
      this.urlSubvalues = [
        {
          'urlName': 'Terminal Management System',
          'icon' : '<i class="fa fa-chevron-down"></i>',
          terminalsubvalues: [{
            'urlLink': 'terminalmanagementsystem/devicemanagement',
            'urlName': 'Device Management',
            'icon' : '<i class="fa fa-chevron-down"></i>',
            devicemanagementsubvalues:[{
              'urlLink': 'devicegroup',
              'urlName': 'Device Group'
            },
            {
              'urlLink': '',
              'urlName': 'Device Import'
            }
          ]
          }
          ]
        }
      ];
  }
}
