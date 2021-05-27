import {MealInOrder} from "./meal-order.model";

export class Orders {
  id?: number;
  mealList: MealInOrder[] = [];
  tableNumber?: number;
  status?: string;
}
