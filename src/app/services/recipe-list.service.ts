import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
export class RecipeListService {
  address = environment.apiURL + 'api/recipes/list';
  constructor( private http:HttpClient) { }

  getRecipeList():Observable<string[]>{
    //let address = environment.apiURL + "api/recipes/list/" ;
    console.log(this.address);
    return this.http.get<string[]>(this.address, httpOptions);
  }
}
