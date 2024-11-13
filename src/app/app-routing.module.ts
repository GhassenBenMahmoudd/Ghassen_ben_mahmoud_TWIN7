import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { FormProductComponent } from './form-product/form-product.component';


const routes: Routes = [

 {path:"home", component:HomeComponent},
 
 {path:"", redirectTo:"home", pathMatch:'full'},
 {path:"products/:id", component:ProductsCategoryComponent},
 { path: 'products', component: ProductsCategoryQPComponent },
 {path:'addp', component:AddProductReactiveComponent},
 { path: 'add-product', component: FormProductComponent },
 {path:"**", component:NotFoundPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
