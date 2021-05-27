import { Component, OnInit } from '@angular/core';
import {Orders} from "../model/order.model";
import {Subscription} from "rxjs";
import {MealInOrder} from "../model/meal-order.model";
import {Meals} from "../model/meals.model";
import {MealServiceService} from "../services/meal-service.service";
import {OrdersServiceService} from "../services/orders-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  mealInOrders: MealInOrder[] = [];
  potentialMeals: MealInOrder[] = [];
  meals: Meals[] = [];
  order: Orders = new Orders();


  constructor(private mealService: MealServiceService,
              private orderService: OrdersServiceService,
              private route : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.mealInOrders = [];
    this.loadMeals();
    this.order = new Orders();
    this.potentialMeals = [];
  }

  loadMeals() {
    this.mealService.findAll().subscribe((meals: any[]) => {
      this.meals = meals;
      this.meals.forEach(meal => {
        this.mealInOrders.push(new MealInOrder(meal, 0));
      });
    })
  }

    addMeal(meal: MealInOrder) {
      if(this.potentialMeals.includes(meal)){
        this.potentialMeals.forEach(data => {
          if(data === meal) data.setQuantity();
        })
      }
      else {
        meal.quantity = 1;
        this.potentialMeals.push(meal);
      }
    }

    applyOrder() {
      this.order.mealList = this.potentialMeals;
      this.order.status = "Waiting for paid";
      console.log(this.order);
      this.orderService.saveOrder(this.order).subscribe(() =>
      {
        this.router.navigate(['/orders']);
      });

    }

    calculateTotal(orders: MealInOrder[]): number {
      let sum = 0;
      orders.forEach(data => {
        // @ts-ignore
        sum += (data.meal?.price * data.quantity);
      })
      return sum;
    }






}
