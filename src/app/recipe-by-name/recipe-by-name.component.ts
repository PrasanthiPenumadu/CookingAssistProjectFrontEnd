import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipebyNameService } from '../services/recipeby-name.service';
import { RecipeListService } from '../services/recipe-list.service';
import { Recipe } from '../classes/Recipe';

@Component({
  selector: 'app-recipe-by-name',
  templateUrl: './recipe-by-name.component.html',
  styleUrls: ['./recipe-by-name.component.css']
})
export class RecipeByNameComponent implements OnInit {
recipebn:Recipe;
  constructor(private router: Router,
    private recipelistservice:RecipeListService,
    private recipebyname:RecipebyNameService) { }

  ngOnInit() {
this.recipebynamem();
  }
recipebynamem(){
  
  this.recipebyname.getRecipebyName(this.recipebyname.name).subscribe(
    recipebn=>{this.recipebn=recipebn});

}
}
