import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductCategory } from '../mock-category-detail';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProd: Product;

  catName: string;


  constructor(private route: ActivatedRoute) {
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


}

