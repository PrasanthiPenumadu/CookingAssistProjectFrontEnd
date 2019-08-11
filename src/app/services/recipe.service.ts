import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Recipe } from '../classes/Recipe';
import { Router } from '@angular/router';
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
export class RecipeService {
  address = environment.apiURL + 'api/recipes';
  constructor( private http:HttpClient,
    ) { }

  getRecipes(): Observable<Recipe>{
    //let address = environment.apiURL + "api/recipes/list/" ;
    console.log(this.address); 
    return this.http.get<Recipe>(this.address, httpOptions);
  }

}
