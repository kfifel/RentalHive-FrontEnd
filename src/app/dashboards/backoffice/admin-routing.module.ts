import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LayoutsComponent} from "../../layouts/layouts.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user-management',
        loadChildren: () => import('./users-managment/users-managment.module').then(m => m.UsersManagementModule),
      },
      {
        path: 'equipments',
        loadChildren: () => import("./equipment/equipment.module").then(m => m.EquipmentModule)
      },
      ])
    ]
})
export class AdminRoutingModule {}
