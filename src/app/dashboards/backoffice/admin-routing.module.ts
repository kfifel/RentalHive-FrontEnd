import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { DashboardHomeComponent} from "./home/dashboard.home.component";

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardHomeComponent
      },
      {
        path: 'user-management',
        loadChildren: () => import('./users-managment/users-managment.module').then(m => m.UsersManagementModule),
      },
      {
        path: 'equipments',
        loadChildren: () => import("./equipment/equipment.module").then(m => m.EquipmentModule)
      },
      {
        path: 'orders',
        loadChildren: () => import("./order/order.module").then(m => m.OrderModule)
      }
      ])
    ]
})
export class AdminRoutingModule {}
