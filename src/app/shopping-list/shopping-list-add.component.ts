import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../recipes/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

  @Input()
  item: Ingredient;

  @Output()
  cleared: EventEmitter<any> = new EventEmitter();

  isAdd: boolean = true;

  ngOnChanges(changes): void {
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    }
    else{
      this.isAdd = false;
    }
  }



  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(formItem: Ingredient){
    const newIng = new Ingredient(formItem.name, formItem.amount);
    if(!this.isAdd){
      this.sls.editItem(this.item, newIng);
      this.onClearForm();
    }
    else{
      this.sls.addItem(newIng);
    }
  }

  onDeleteItem(){
    this.sls.deleteItem(this.item);
    this.onClearForm();
  }

  onClearForm(){
    this.isAdd = false;
    this.cleared.emit(null);
  }

}
