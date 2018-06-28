import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-modelmanagement',
  templateUrl: './modelmanagement.component.html',
  styleUrls: ['./modelmanagement.component.css']
})
export class ModelmanagementComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  addModel() {
    console.log(this.model);
  }

}
