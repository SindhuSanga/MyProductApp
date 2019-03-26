import { Component, OnInit } from '@angular/core';
import {Product } from '../product';
import {PRODUCTS} from '../mock-products';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProd:Product;
  selectedProductTypes:Product;
  catName:string;
  constructor(private route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params=>{
      this.catName =  params.get("pName")
      console.log(this.catName)
   })
  
  }
 
  ngOnInit() {
    this.getSelectedProduct()
//this.getSelectedProductTypes(id:number)

  }
 getSelectedProduct(){
    
   this.selectedProd=PRODUCTS.find(product=>product.pName==this.catName)

 }
getSelectedProductTypes(id:number){
  this.selectedProductTypes=this.selectedProductTypes
  .filter(prodType => prodType.pTypes.catname === PRODUCTS.pTypes.catname) 
  });
  
}
}
