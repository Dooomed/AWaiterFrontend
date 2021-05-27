import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    MealFormComponent,
    MealDetailsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    OrderDetailsComponent,
    HomepageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
