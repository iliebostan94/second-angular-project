import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../recipes/recipe-list/shared/ingredient.model';
import { Product } from '../recipes/recipe-list/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  title = 'Stock table';
  productToUpdate: any;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 6),

  ];
  products: Product[] = [
    new Product( '1', 'Screw Driver', 50, 4),
    new Product( '2', 'Axe', 80, 6),
    new Product( '3', 'Umbrella', 40, 10),
    new Product( '4', 'Hooks', 25, 20)
  ];


  constructor() { }
  ngOnInit() {

  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  changeStockValue(p) {
        this.productToUpdate = this.products.find(this.findProducts, [p.id]);
        this.productToUpdate.stock = this.productToUpdate.stock + p.updatedstockvalue;
     }
     findProducts(p) {
       return p.id === this[0];
     }


}
