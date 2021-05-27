import { Component, OnInit } from '@angular/core';
import {Orders} from "../model/order.model";
import {OrdersServiceService} from "../services/orders-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order?: Orders = new Orders();

  constructor(private orderService:OrdersServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.findOne(id).subscribe(e => this.order = e);
}

  deleteOrder():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.delete(id).subscribe(() => this.router.navigate(['/orders']));
  }

}
