import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

// import { filter } from 'rxjs/operator/filter';

import { ActivatedRoute } from '@angular/router';
import { Config,ProductDetailConfigService } from './productdetail-service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  providers: [ ProductDetailConfigService ],
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail:any[];
  error: any;
  headers: string[];
  config: Config;
  pData: any;
  data1:any[];
  prodData: string;
  selectcatName: string;
  eachProductDetail: any;
  constructor(private route: ActivatedRoute,private configService: ProductDetailConfigService) {
    this.route.paramMap.subscribe(params => {
      this.selectcatName = params.get("pTypes.catname")
      this.prodData = params.get("pName")
      // console.log(this.selectcatName)
      // console.log(this.prodData)
    })
  }

  ngOnInit() {
  
    this.showConfigResponse();
   
  }
  
  getProductDetail() {
    // this.data1 = this.productDetail
    this.pData =this.productDetail.find(item =>item.pName == this.prodData);
    console.log(this.pData);
  }
  getEachProductDetail() {
    
      this.eachProductDetail =  this.pData[0].pTypes.filter(value => {
        console.log(value);
        return value.catname == this.selectcatName;
      });
   
    console.log(this.eachProductDetail);
  }
  showConfigResponse() {
    // this.configService.getConfigResponse()
    //   .subscribe(resp => {
    //     console.log(resp)
    //     const keys = resp.headers.keys();
    //     this.headers = keys.map(key =>
    //       `${key}: ${resp.headers.get(key)}`);

          
    //     this.productDetail = { ... resp.body };
    //     console.log(keys)
    //     // this.getProductDetail();
      // });
      this.data1= this.configService.getArticle(this.prodData);
      console.log(this.data1);
  }
}
