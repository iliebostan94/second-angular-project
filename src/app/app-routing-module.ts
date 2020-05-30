import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayPoolComponent } from './play-pool/play-pool.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeCommentComponent } from './recipes/recipe-detail/recipe-comment/recipe-comment.component';
import { SingleCommentComponent } from './recipes/recipe-detail/recipe-comment/single-comment/single-comment.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {  path: '', redirectTo: '/recipes', pathMatch: 'full' }, // this one works as a home page
    {  path: 'play-pool', component: PlayPoolComponent, },
    // {  path: 'recipes', component: RecipesComponent, children: [
    //     {  path: '', component: RecipesStartComponent },
    //     {  path: ':id', component: RecipeDetailComponent, },
    //     {  path: ':id/:name', component: RecipeCommentComponent, },
    //     {  path: ':id/:name/:rating', component: RecipeCommentComponent, },
    // ]},
    {  path: 'recipes', component: RecipesComponent },
    {  path: 'recipes/:id', component: RecipeDetailComponent, },
    {  path: 'recipes/:id/:name', component: RecipeCommentComponent, },
    {  path: 'recipes/:id/:name/:rating', component: RecipeCommentComponent, },
    {  path: 'single-comment', component: SingleCommentComponent, },
    {  path: 'shopping-list', component: ShoppingListComponent, },


    { path: 'not-found', component: PageNotFoundComponent, },
    { path: '**', redirectTo: 'not-found', },

    ];

@NgModule({
   imports: [
     RouterModule.forRoot( appRoutes, {useHash: true} )
    //    RouterModule.forRoot( appRoutes )
   ],
   exports: [RouterModule]
})



export class AppRoutingModule {

}
