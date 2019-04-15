import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
// import { ProductCategory } from '../mock-category-detail';
import { ActivatedRoute } from '@angular/router';
import { Config,ProductListConfigService } from './productlist-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ProductListConfigService ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProd: {};

  catName: string;

  error: any;
  headers: string[];
  categoryData: Config[];
  config: Config;

  constructor(private route: ActivatedRoute,private configService: ProductListConfigService) {
    // console.log(ProductCategory);
    this.route.paramMap.subscribe(params => {
      this.catName = params.get("pName")
      console.log(this.catName);
    })

  }

  ngOnInit() {
   
    this.showConfigResponse();
 

  }
  getSelectedProduct() {

    this.selectedProd =  this.categoryData.filter(product => product.pName == this.catName)
    console.log(this.selectedProd)

  }
  showConfigResponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        console.log(resp)
       this.categoryData =resp.body

       this.getSelectedProduct()
       
      });
  }

}

