import { Component, OnInit } from '@angular/core';
import {MealServiceService} from "../services/meal-service.service";
import {Meals} from "../model/meals.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  meals: Meals[] = [];

  constructor(private mealService: MealServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.mealService.findAll().subscribe(data => {
      this.meals = data;
    })
  }

  goToDetails(id: number | undefined) {
    this.router.navigate([`/meals/${id}`]);
  }

}
