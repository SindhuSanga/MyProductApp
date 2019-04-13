import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
// import {ProductDashboardModule} from './product-dashboard/product-dashboard.module';
=======
import {ProductDashboardModule} from './product-dashboard/product-dashboard.module';

>>>>>>> eea845c8f32b2b6aed64cec8e803bafebeb76f33
const appRoute:Routes=[
  {path:"Home" ,component:HomeComponent},
  {path:"Products" ,component:CategoryListComponent},
  {path:"Config" ,component:ConfigComponent},
  {path:"Products/productList/:pName" , component:ProductListComponent},
  {path:"Products/productList/:pName/:pTypes.catname" ,component:ProductDetailComponent},
  {
    path: 'Dashboard',
    loadChildren: './product-dashboard/product-dashboard.module#ProductDashboardModule'
  },
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
 
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConfigComponent,
    HomeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    NgbModule,
    // ProductDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
