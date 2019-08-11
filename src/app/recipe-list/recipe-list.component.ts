import { Component, OnInit } from '@angular/core';
import {RecipeListService} from 'src/app/services/recipe-list.service';
import {RecipebyNameService} from 'src/app/services/recipeby-name.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  listRecipe:string[];
listRecipeName:string[];
name:string;
  constructor(private recipelistservice:RecipeListService,
    private recipebyname:RecipebyNameService,
    private router: Router) { }

  ngOnInit() {
    this.listRecipem();

  }
listRecipem(){
  console.log("inside recipeList");
  this.recipelistservice.getRecipeList().subscribe(listRecipe=>this.listRecipe=listRecipe)
    console.log(this.listRecipe);
}
recipeNameClick(name:string){
  this.recipebyname.name=name;
  console.log(name);
// this.recipebyname.getRecipebyName(name);
 this.router.navigate(['recipebyName']);
}
}
