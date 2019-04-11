import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
// import { ProductCategory } from '../mock-category-detail';
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
  categoryData: [];
  config: Config;

  constructor(private route: ActivatedRoute,private configService: ConfigService) {
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

    this.selectedProd =  this.categoryData.find(product => product.pName == this.catName)
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

