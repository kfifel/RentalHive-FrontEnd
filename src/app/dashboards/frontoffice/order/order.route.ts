import {Routes} from "@angular/router";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {CreateOrderComponent} from "./create-order/create-order.component";

export const orderRoutes: Routes = [
  {
    path: '',
    component: OrderListComponent,
  },
  {
    path: 'view',
    component: OrderDetailComponent
  },
  {
    path: 'new',
    component: CreateOrderComponent
  }
];
