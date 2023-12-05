import {EquipmentFamilyComponent} from "./equipment-family/equipment-family.component";
import {EquipmentListComponent} from "./equipment-list/equipment-list.component";
import {Routes} from "@angular/router";

export const equipmentRoutes: Routes = [
  { path: '', component: EquipmentListComponent },
  { path: 'family', component: EquipmentFamilyComponent },
];
