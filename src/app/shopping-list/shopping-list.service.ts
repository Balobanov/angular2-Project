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

  addItem(item: Ingredient){
    this.ingredients.push(item);
  }

  editItem(old: Ingredient, newIng: Ingredient){
    this.ingredients[this.ingredients.indexOf(old)] = newIng;
  }

  deleteItem(item: Ingredient){
    this.ingredients.splice(this.ingredients.indexOf(item), 1);
  }

}
