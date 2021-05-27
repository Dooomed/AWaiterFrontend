import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Orders} from "../model/order.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  private ordersUrl: string;

  constructor(private http: HttpClient) {
    this.ordersUrl = "http://localhost:8080/orders";
  }

  saveOrder(order: Orders) {
    return this.http.post(this.ordersUrl, order);
  }

  getAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.ordersUrl);
  }

  findOne(id: number):Observable<Orders> {
    return this.http.get<Orders>(this.ordersUrl + `/${id}`);
  }

  delete(id: number): Observable<Orders> {
    return this.http.delete<Orders>(this.ordersUrl + `/delete/${id}`);
  }

}
