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
  selectcatName:string;
  eachProductDetail:any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params=>{
      this.selectcatName =  params.get("pTypes.catname")
      console.log(this.selectcatName)
   })
   }

  ngOnInit() {
   this.getProductDetail();
  // this.getEachProductDetail();
  }
  getProductDetail() {
    for (let item in PRODUCTS) {
      console.log(item);
      for (let subItem in PRODUCTS[item]) {
        if (subItem == "pTypes") {
          this.pData =PRODUCTS[item][subItem]
          console.log(this.pData);
          // this.eachProductDetail=this.pData.filter(prod =>prod.catname==this.selectcatName )
          // console.log(this.eachProductDetail);
        }
      }
     }
     return this.pData;
  }

}
