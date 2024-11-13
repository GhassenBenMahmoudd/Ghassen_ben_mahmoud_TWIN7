import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit{
myForm: FormGroup;

ngOnInit(){
  this.myForm = new FormGroup({
    name: new FormControl("test",Validators.required),
    price: new FormControl(),
    description: new FormControl()
  })
}
get name (){
  return this.myForm.get('name');
}
get price (){
  return this.myForm.get('price');
}
get description (){
  return this.myForm.get('description');
}
}