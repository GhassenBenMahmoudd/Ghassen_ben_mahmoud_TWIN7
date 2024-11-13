import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModule } from '../product/product.module';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  id: number;
  listProducts: ProductModule[] = [
    { id: 1, name: 'Refrigérateur LG Inox', image: 'assets/images/refrigerateur-lg.jpg', categoryId: 1, description: '', price: 2800, brand: 'LG', promotion: 0 },
    { id: 2, name: 'Refrigérateur Samsung Blanc', image: 'assets/images/refrigerateur_samsung.jpeg', categoryId: 1, description: '', price: 2400, brand: 'Samsung', promotion: 0 },
    // Ajoutez d'autres produits...
  ];
  list: ProductModule[] = [];

  constructor(private ac: ActivatedRoute) {}

  ngOnInit() {
    this.ac.paramMap.subscribe(res => {
      this.id = Number(res.get('id'));
      this.list = this.listProducts.filter(p => p.categoryId === this.id);
    });
  }
}