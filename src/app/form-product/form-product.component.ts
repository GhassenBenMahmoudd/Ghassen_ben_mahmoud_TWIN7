import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModule } from '../product/product.module';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  productForm: FormGroup;
  products: ProductModule[] = []; // Liste des produits ajoutés

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialisation du formulaire dans ngOnInit
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]],
      image: [''],
      categoryId: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      brand: [''],
      promotion: ['', [Validators.pattern('^(0|[1-9][0-9]?)$')]]
    });
  }

  onSave(): void {
    if (this.productForm.valid) {
      const newProduct: ProductModule = {
        ...this.productForm.value,
        id: this.products.length + 1 // auto-incrémentation
      };
      this.products.push(newProduct);
      this.productForm.reset();
    }
  }
}
