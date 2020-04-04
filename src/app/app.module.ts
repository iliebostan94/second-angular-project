import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const appRoutes: Routes = [
{  path: 'play-pool', component: PlayPoolComponent, },
{  path: 'recipes', component: RecipesComponent, },
{  path: 'recipes/:id', component: RecipeDetailComponent, },
{  path: 'shopping-list', component: ShoppingListComponent, }

];
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
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
