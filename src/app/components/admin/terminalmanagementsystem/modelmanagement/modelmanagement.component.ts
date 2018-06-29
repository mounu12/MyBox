import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-modelmanagement',
  templateUrl: './modelmanagement.component.html',
  styleUrls: ['./modelmanagement.component.css']
})
export class ModelmanagementComponent implements OnInit {
  model: any = {};
  data: any = [{
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },
      {
          thumbnail: '',
          modelname: 'DV8020',
          modelid: 0 * 8375,
          vendor: 'SDMC',
          chipset: '-',
          ddr: '1G',
          nandflash: '16G',
          specification: 'specifications.pdf',
          operation: 'active'
      },


  ];
  constructor() {}

  ngOnInit() {}
  addModel() {
      console.log(this.model);
  }

}