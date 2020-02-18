import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

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

}
