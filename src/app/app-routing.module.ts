import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeByNameComponent } from './recipe-by-name/recipe-by-name.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {path:'recipe',component:RecipeComponent},
  {path:'recipelist',component:RecipeListComponent},
{path:'recipebyName',component:RecipeByNameComponent}
];

@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
