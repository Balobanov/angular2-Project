import { Component, OnInit } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: './rb-header.component.html'
})
export class RbHeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onStoreRecipes(){
      this.recipeService.storeRecipes().subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

  onFetchRecipes(){
    this.recipeService.fetchRecipes();
  }
}
