import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order-service.service";
import {Order} from "../model/order.model";

@Component({
  selector: 'app-order-equipment-list',
  templateUrl: './order-equipment-list.component.html',
  styleUrls: ['./order-equipment-list.component.css']
})
export class OrderEquipmentListComponent implements OnInit {
  orders: Order[] | null = [];
  routesLinks: {value: string, route: string}[] = [
    {value: 'orders', route: '/admin/orders'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.orderService.query().subscribe({
      next: (resp) => {
        this.orders = resp.result;
      },

      error: (responseError) => {

      }
    })
  }
}
