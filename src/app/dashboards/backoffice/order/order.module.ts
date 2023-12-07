import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {OrderEquipmentListComponent} from "./order-equipment-list/order-equipment-list.component";
import {orderRoutes} from "./order.route";


@NgModule({
  declarations: [
    OrderEquipmentListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(orderRoutes)
  ],
})
export class OrderModule { }
