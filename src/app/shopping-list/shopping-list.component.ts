import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../recipes/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  private ingredients: Ingredient[] = [new Ingredient('First', 10), new Ingredient('Second', 2)];
  constructor() { }

  ngOnInit() {
  }

}
