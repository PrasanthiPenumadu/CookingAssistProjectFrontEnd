import { Injectable } from '@angular/core';
import{RecipeListService} from 'src/app/services/recipe-list.service';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Recipe } from '../classes/Recipe';

const httpOptions = {
  headers: new HttpHeaders(
  { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token',
    'Content-Type': 'application/json'
  }
  )
};

@Injectable({
  providedIn: 'root'
})
export class RecipebyNameService {
  name:string;
 
  constructor( private http:HttpClient,
     private recipeListService:RecipeListService) { }

  getRecipebyName(name:string): Observable<Recipe>{
   let address = environment.apiURL + 'api/recipes/by/'+name;//+this.recipeListService.name;
    console.log(address); 
    return this.http.get<Recipe>(address, httpOptions);

  }
}
