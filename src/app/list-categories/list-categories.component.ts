import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  titre : string = "";
  getDescription(description:string){
    alert (description);
  }

  categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"aaaaaa", "available":true},
    {"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"2222", "available":true},
    {"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"ooo", "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"", "available":true},
    {"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"jjj", "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"cccc","available":false},
  ]
  // Propriété pour stocker la recherche de l'utilisateur
  searchTerm: string = '';

  // Méthode pour filtrer les catégories
  get filteredCategories() {
    return this.categories.filter(category => 
      category.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
