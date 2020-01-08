import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
    'Just a test here for now',
     // tslint:disable-next-line:max-line-length
     'https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
  ];

  constructor() { }

  ngOnInit() {
  }

}
