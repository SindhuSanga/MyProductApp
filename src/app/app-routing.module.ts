import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:"Home" ,component:HomeComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"login" ,component:LoginComponent},
  {path:"Products" ,component:CategoryListComponent},
  {path:"Config" ,component:ConfigComponent},
  {path:"Products/productList/:pName" , component:ProductListComponent},
  {path:"Products/productList/:pName/:pTypes.catname" ,component:ProductDetailComponent},
  
  {
    path: 'Dashboard',
    loadChildren: './product-dashboard/product-dashboard.module#ProductDashboardModule'
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
 
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
