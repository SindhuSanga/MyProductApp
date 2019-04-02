import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';



import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pData: any;
  prodData: string;
  selectcatName: string;
  eachProductDetail: any;
  constructor(private route: ActivatedRoute) {
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
    this.pData = PRODUCTS.filter(item =>item.pName == this.prodData);
    console.log(this.pData);
  }
  getEachProductDetail() {
    this.pData.filter(product => {
      this.eachProductDetail = product.pTypes.filter(value => {
        return value.catname == this.selectcatName;
      });
    });
    console.log(this.eachProductDetail);
  }
}
