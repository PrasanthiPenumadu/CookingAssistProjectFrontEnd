import {Ingredient} from 'src/app/classes/Ingredient';
export class Recipe{
    id:string;
    author:string;
    name:string;
    description:string;
    ingredients:Ingredient[];
    prepTimeInSeconds:number;
    cookTimeInSeconds:number;
    steps:string[];
    constructor(id:string,author:string,name:string,description:string,ingredients:Ingredient[],prepTimeInSeconds:number,cookTimeInSeconds:number,steps:string[]){
        this.id=id;
        this.author=author;
        this.name=name;
        this.description=description;
        this.ingredients=ingredients;
        this.prepTimeInSeconds=prepTimeInSeconds;
        this.cookTimeInSeconds=cookTimeInSeconds;
        this.steps=steps;
    }
    
}