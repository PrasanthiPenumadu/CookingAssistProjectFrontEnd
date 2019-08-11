import { Component, OnInit } from '@angular/core';
import {RecipeService} from 'src/app/services/recipe.service';
import { Recipe } from '../classes/Recipe';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
listRecipes:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.listRecipesm();
  }
listRecipesm(){
  console.log("inside recipesList");
  this.recipeService.getRecipes().subscribe(
    listRecipes=>this.listRecipes=listRecipes);  
    console.log(this.listRecipes);
}
}
