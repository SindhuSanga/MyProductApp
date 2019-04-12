import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';



import { ActivatedRoute } from '@angular/router';
import { Config,ProductDetailConfigService } from './productdetail-service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  providers: [ ProductDetailConfigService ],
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail:Config[];
  error: any;
  headers: string[];
  config: Config;
  pData: any;
  prodData: string;
  selectcatName: string;
  eachProductDetail: any;
  constructor(private route: ActivatedRoute,private configService: ProductDetailConfigService) {
    this.route.paramMap.subscribe(params => {
      this.selectcatName = params.get("pTypes.catname")
      this.prodData = params.get("pName")
      console.log(this.selectcatName)
      console.log(this.prodData)
    })
  }

  ngOnInit() {
    this.getProductDetail();
    this.getEachProductDetail();
  }
  getProductDetail() {
    this.pData =this.productDetail.filter(item =>item.pName == this.prodData);
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
    this.configService.getConfigResponse()
      .subscribe(resp => {
        console.log(resp)
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

          
        this.config = { ... resp.body };
        console.log(keys)
      });
  }
}
