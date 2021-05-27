import { Component, OnInit } from '@angular/core';
import {OrdersServiceService} from "../services/orders-service.service";
import {Orders} from "../model/order.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Orders[] = [];

  constructor(private orderService: OrdersServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }

  goToOrderDetails(id: number | undefined): void {
    this.router.navigate([`/orders/${id}`])
  }


}
