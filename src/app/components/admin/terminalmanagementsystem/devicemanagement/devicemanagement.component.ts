import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devicemanagement',
  templateUrl: './devicemanagement.component.html',
  styleUrls: ['./devicemanagement.component.css']
})
export class DevicemanagementComponent implements OnInit {
  displayDevieM: boolean;
  path: string;
  mainPath: string;
  public rowsOnPage = 10;
  public sortBy = 'createdAt';
  public sortOrder = 'desc';
  selectedEntities: any = [];
  data: any = [
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'teja', email: 'sdf@wer.com', age: 122, city: 'dddd'},

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

  ngOnInit() {
  }
  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
}
}
