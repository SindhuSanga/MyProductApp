import { Component, OnInit } from '@angular/core';
// import {Product } from '../product';
// import {PRODUCTS} from '../mock-products';

import {Config,ConfigService} from '../config/config.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  // Product:Product[];
 prodList:Config;

  error: any;
  headers: string[];
  config: Config;
  constructor(private configService:ConfigService) { }



  ngOnInit() {
   this.showConfigResponse();       
  }
  showConfigResponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        console.log(resp)
        this.prodList=resp.body;
      })
    }
}
