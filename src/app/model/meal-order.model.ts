import {Meals} from "./meals.model";

export class MealInOrder {
  constructor(meal: Meals, quantity: number) {
    this.meal = meal;
    this.quantity = quantity;
  }

  meal?: Meals;
  quantity: number;

  setQuantity() {
    this.quantity = this.quantity + 1;
  }
}
