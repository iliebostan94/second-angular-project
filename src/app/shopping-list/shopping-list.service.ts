import { Ingredient } from '../recipes/recipe-list/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 6),
      ];

  getIngredients() {
      return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
      this.ingredients.push( ingredient );
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
      // tslint:disable-next-line:prefer-const
    //   for (let ingredient of ingredients) {
    //       this.addIngredient(ingredient);
    //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit (this.ingredients.slice());
  }
}
