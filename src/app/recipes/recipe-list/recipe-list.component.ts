import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(recipesService: RecipesService) {
    this.recipes = recipesService.getRecipes();
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('selected recipe: ', recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
