import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meals} from "../model/meals.model";

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  private mealsUrl: string;

  constructor(private http: HttpClient) {
    this.mealsUrl = "http://localhost:8080/meals";
  }

  public findAll(): Observable<Meals[]> {
    return this.http.get<Meals[]>(this.mealsUrl);
  }

  public save(meal: Meals) {
    return this.http.post<Meals>(this.mealsUrl, meal);
  }

  public findOne(id: number): Observable<Meals> {
    return this.http.get<Meals>(this.mealsUrl + `/${id}`);
  }

  public delete(id: number): Observable<Meals> {
    return this.http.delete<Meals>(this.mealsUrl + `/delete/${id}`);
}
}
