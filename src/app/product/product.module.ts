import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent // Facultatif, mais utile si vous voulez exporter le composant
  ]
})
export class ProductModule {  
  id: number;
  name: string;
  image: string;
  categoryId: number;
  description: string;
  price: number;
  brand: string;
  promotion: number;
}