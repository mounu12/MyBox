import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-modelmanagement',
  templateUrl: './modelmanagement.component.html',
  styleUrls: ['./modelmanagement.component.css']
})
export class ModelmanagementComponent implements OnInit {
  model: any = {};
  data: any = [
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd', operator: 'vodafone', lastcontact: '456788',group: 'aaa',version: '2.0',status:'active'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd', operator: 'vodafone', lastcontact: '456788',group: 'aaa',version: '2.0',status:'active'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'goutam', email: 'sdf@wer.com', age: 122, city: 'dddd'},
    {name: 'teja', email: 'sdf@wer.com', age: 122, city: 'dddd', operator: 'vodafone', lastcontact: '456788',group: 'aaa',version: '2.0',status:'active'},

  ];
  constructor() { }

  ngOnInit() {
  }
  addModel() {
    console.log(this.model);
  }

}
