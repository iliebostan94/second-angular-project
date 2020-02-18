import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(1, 'A test recipe',
    'Just a test here for now',
     // tslint:disable-next-line:max-line-length
     'https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),

    new Recipe(2, 'A second cool recipe',
    'Another description for recipe',
     // tslint:disable-next-line:max-line-length
     'https://img.taste.com.au/FGRFnJHc/taste/2016/11/prawn-and-egg-fried-rice-64324-1.jpeg')
    ];
  constructor() { }
  getRecipes(): Recipe[] {
    return this.recipes;
  }
  getRecipe(id: number): Recipe {
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
  }
}
