import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {RouterModule} from "@angular/router";
import {orderRoutes} from "./order.route";
import { CreateOrderComponent } from './create-order/create-order.component';
import {SharedModule} from "../../../shared/shared.module";
import {MaterialModule} from "../../../matrial.module";



@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(orderRoutes),
  ]
})
export class OrderModule { }
