import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devicemanagement',
  templateUrl: './devicemanagement.component.html',
  styleUrls: ['./devicemanagement.component.css']
})
export class DevicemanagementComponent implements OnInit {
  displayDevieM: boolean;
  model: any = {};
  path: string;
  mainPath: string;
  public rowsOnPage = 10;
  public sortBy = 'createdAt';
  public sortOrder = 'desc';
  selectedEntities: any = [];
  data: any = [{
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
      {
          mac: '00:1A:CC:1A:70:FF',
          serialnumber: '170300070053',
          manufacturer: 'SDMC',
          model: 'DV7819A',
          lastcontact: '05/01/2018 14:09:16',
          group: 'zsj-test-group-FF',
          version: '4.10.7.6',
          status: 'Activated',
          connected: 'online',
          chipid: 's46354',
          cardid: '547D87364',
          operation: 'no'
      },
  ];

  constructor(private _router: Router, private activatedRoute: ActivatedRoute) {
      this.mainPath = this.activatedRoute.snapshot.url[0].path;
      this.path = this._router.url;

      console.log('path' + this.path);
      if (this.path === '/admin/terminalmanagementsystem/devicemanagement') {
          this.displayDevieM = true;
      } else {
          this.displayDevieM = false;
      }
  }

  ngOnInit() {}
  public setSelectedEntities($event: any) {
      this.selectedEntities = $event;
  }
}