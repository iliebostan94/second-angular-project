import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   @Input() recipe: Recipe;

  users = [
    {
      id: 1,
      name: 'Jenn',
      rating: 5
    },
    {
      id: 2,
      name: 'Alex',
      rating: 4
    },
    {
      id: 3,
      name: 'Tania',
      rating: 5
    },
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipesService: RecipesService) {}

  ngOnInit() {
    if (this.recipe === undefined || this.recipe === null) {
      const id = this.route.snapshot.paramMap.get('id');
      console.log('getting id from params: ', id);
      this.recipe = this.recipesService.getRecipe(+id);
    }
  }

  onAddToShoppingList() {
     this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
  onLoadShoppingList() {
     this.router.navigate(['/shopping-list']);
    // or
    // this.router.navigate(['shopping-list'], {relativeTo: this.route});
  }

}
