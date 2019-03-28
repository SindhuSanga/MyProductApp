import { Component, OnInit } from '@angular/core';
import {Product } from '../product';
import {ProductCategory} from '../mock-category-detail';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProd:Product;
  selectedProductTypes:any;
  selectedProduct:any;
  catName:string;
  
  //  data1=PRODUCTS[0].pTypes;
  //  data2=PRODUCTS[1].pTypes;
  //  data3=PRODUCTS[2].pTypes;
  constructor(private route:ActivatedRoute) { 
    console.log(ProductCategory);
    this.route.paramMap.subscribe(params=>{
      this.catName =  params.get("pName")
      console.log(this.catName)
   })
  
  }
 
  ngOnInit() {
    this.getSelectedProduct()
this.getSelectedProductData()

  }
 getSelectedProduct(){
    
   this.selectedProd=ProductCategory.find(product=>product.pName==this.catName)
   console.log(this.selectedProd)

 }
getSelectedProductData(){
  // for(this.selectedProduct in this.data1){
  //  if(this.selectedProd.pTypes==this.data1[this.selectedProduct]){
  //   console.log(this.selectedProduct);
  //   return this.data1[this.selectedProduct];
  // }
  // else if(this.selectedProd.pTypes==this.data2[this.selectedProduct]){
  //   return this.data2[this.selectedProduct];
  // }
  // else{
  //   return this.data3[this.selectedProduct];
  // }
// }
  
  
}


}

