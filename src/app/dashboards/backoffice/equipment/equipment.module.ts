import {NgModule} from "@angular/core";
import {EquipmentListComponent} from "./equipment-list/equipment-list.component";
import {EquipmentFamilyComponent} from "./equipment-family/equipment-family.component";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {equipmentRoutes} from "./equipment.route";


@NgModule({
  declarations: [
    EquipmentListComponent,
    EquipmentFamilyComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(equipmentRoutes)
  ],
})
export class EquipmentModule { }
