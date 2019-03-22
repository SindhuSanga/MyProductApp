import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../mock-products';
import {Product } from '../product';

import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  productData=PRODUCTS;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  //   this.route.params.subscribe(params=>{
  //       this.productData.forEach((p:Product)=>{
  //         if(p.id==params.id){
  //           this.productData=p.pTypes;
  //         }
  //         console.log(this.productData)
  //       })
  //   })
   }

}
