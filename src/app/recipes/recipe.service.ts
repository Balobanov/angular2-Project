import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";

@Injectable()
export class RecipeService {

  //private recipeEvent: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe('One','One','https://cdn3.iconfinder.com/data/icons/food-volume-9/48/446-128.png', [
      new Ingredient('Potapo', 2),
      new Ingredient('Meat', 1),
      new Ingredient('Plate', 2)
    ]),
    new Recipe('Two','Two','https://cdn3.iconfinder.com/data/icons/kitchen-food-5/96/kitchen_cook_recipe_book-128.png', [
      new Ingredient('Corn', 2),
      new Ingredient('Oil', 1)
    ]),
    new Recipe('Three','Three','https://cdn4.iconfinder.com/data/icons/food-vol-3-2/48/146-128.png', [
      new Ingredient('Coca-cola', 3),
      new Ingredient('Cat', 2)
    ])];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipeById(id: number): Recipe{
        return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(old: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(old)] = newRecipe;
  }
}
