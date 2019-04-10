import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductCategory } from '../mock-category-detail';
import { ActivatedRoute } from '@angular/router';
import { Config,ConfigService } from './productlist-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProd: Product;

  catName: string;

  error: any;
  headers: string[];
  config: Config;

  constructor(private route: ActivatedRoute,private configService: ConfigService) {
    console.log(ProductCategory);
    this.route.paramMap.subscribe(params => {
      this.catName = params.get("pName")
      console.log(this.catName);
    })

  }

  ngOnInit() {
    this.getSelectedProduct()


  }
  getSelectedProduct() {

    this.selectedProd = ProductCategory.find(product => product.pName == this.catName)
    console.log(this.selectedProd)

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

