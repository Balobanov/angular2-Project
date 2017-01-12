import {Route, Router, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipes/recipe.routes";

const APP_ROUTES: Route[] = [
  { path: '', redirectTo: "/recipes", pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
  { path: 'shopping-list', component: ShoppingListComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
