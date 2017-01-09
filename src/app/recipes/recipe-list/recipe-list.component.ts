import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('One','One','https://cdn3.iconfinder.com/data/icons/food-volume-9/48/446-128.png', []),
    new Recipe('Two','Two','https://cdn3.iconfinder.com/data/icons/kitchen-food-5/96/kitchen_cook_recipe_book-128.png', []),
    new Recipe('Three','Three','https://cdn4.iconfinder.com/data/icons/food-vol-3-2/48/146-128.png', [])];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
      this.selectedRecipe.emit(recipe);
  }
}
