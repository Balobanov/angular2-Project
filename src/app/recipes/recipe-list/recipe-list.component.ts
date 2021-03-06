import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService){
    this.recipes = recipeService.getRecipes();
  }
  ngOnInit() {
    this.recipeService.recipeEvent.subscribe(
      (data) => this.recipes = data
    );
  }
}
