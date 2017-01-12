import {Ingredient} from "../recipes/ingredient";
export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredients(items: Ingredient[]){
    Array.prototype.push.apply(this.ingredients, items);
  }

}
