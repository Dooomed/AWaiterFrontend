import { Component, OnInit } from '@angular/core';
import {Meals} from "../model/meals.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MealServiceService} from "../services/meal-service.service";

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent{

  meal: Meals;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mealService: MealServiceService) {
    this.meal = new Meals();
  }

  onSubmit() {
    this.mealService.save(this.meal).subscribe(() => this.goToMealList());
  }

  goToMealList() {
    this.router.navigate(['/meals']);
  }
}
