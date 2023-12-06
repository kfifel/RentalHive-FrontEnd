import {Routes} from "@angular/router";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

export const orderRoutes: Routes = [
  {
    path: '',
    component: OrderListComponent,
  },
  {
    path: 'view',
    component: OrderDetailComponent
  }
];
