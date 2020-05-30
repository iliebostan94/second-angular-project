import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { StockChangeTableComponent } from './shopping-list/stock-change-table/stock-change-table.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { PlayPoolComponent } from './play-pool/play-pool.component';
import { LoggingServiceComponent } from './play-pool/logging-service/logging-service.component';
import { NewAccountComponent } from './play-pool/logging-service/new-account/new-account.component';
import { AccountComponent } from './play-pool/logging-service/account/account.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeCommentComponent } from './recipes/recipe-detail/recipe-comment/recipe-comment.component';
import { SingleCommentComponent } from './recipes/recipe-detail/recipe-comment/single-comment/single-comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing-module';

// const appRoutes: Routes = [
// {  path: 'play-pool', component: PlayPoolComponent, },
// {  path: 'recipes', component: RecipesComponent, },
// {  path: 'recipes/:id', component: RecipeDetailComponent, },
// {  path: 'recipes/:id/:name', component: RecipeCommentComponent, },
// {  path: 'recipes/:id/:name/:rating', component: RecipeCommentComponent, },
// {  path: 'single-comment', component: SingleCommentComponent, },
// {  path: 'shopping-list', component: ShoppingListComponent, },


// { path: 'not-found', component: PageNotFoundComponent, },
// { path: '**', redirectTo: 'not-found', }
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    StockChangeTableComponent,
    BetterHighlightDirective,
    DropdownDirective,
    PlayPoolComponent,
    LoggingServiceComponent,
    NewAccountComponent,
    AccountComponent,
    RecipeCommentComponent,
    SingleCommentComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
