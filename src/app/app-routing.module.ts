import {RouterModule, Routes} from "@angular/router";
import {MealListComponent} from "./meal-list/meal-list.component";
import {MealFormComponent} from "./meal-form/meal-form.component";
import {NgModule} from "@angular/core";
import {MealDetailsComponent} from "./meal-details/meal-details.component";
import {OrdersComponent} from "./orders/orders.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {HomepageComponent} from "./homepage/homepage.component";


const routes: Routes = [
  {path: 'meals', component: MealListComponent},
  {path: 'addMeal', component: MealFormComponent},
  {path: 'meals/:id', component: MealDetailsComponent},
  {path: 'orders', component:OrdersComponent},
  {path: 'newOrder', component: ShoppingCartComponent},
  {path: 'orders/:id', component: OrderDetailsComponent},
  {path: '', component: HomepageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
