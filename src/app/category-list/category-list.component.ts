import { Component, OnInit } from '@angular/core';
import {Product } from '../product';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Product:Product[];
  prodList=PRODUCTS;
  selectedProduct:Product;

 
  constructor() { }



  ngOnInit() {
          
  }

}
