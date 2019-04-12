import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDashboardRoutingModule} from './product-dashboard-routing.module'

@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule,
    ProductDashboardRoutingModule
  ],
  exports: [
    ProductDashboardComponent
  ]
})
export class ProductDashboardModule { }
