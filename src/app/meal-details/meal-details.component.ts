import { Component, OnInit } from '@angular/core';
import {Meals} from "../model/meals.model";
import {MealServiceService} from "../services/meal-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  meal?: Meals;

  constructor(private mealService: MealServiceService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mealService.findOne(id)
      .subscribe(meal => this.meal = meal);
  }

  deleteMeal() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.mealService.delete(id)
      .subscribe(() => this.router.navigate(['/meals']));
  }

}
