import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/list/user.component";
import {AddComponent} from "./user/add/add.component";
import {EquipmentListComponent} from "./equipment/equipment-list/equipment-list.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LayoutsComponent} from "./layouts/layouts.component";


const routes: Routes = [
  {
    path: 'users',
    component: LayoutsComponent,
    loadChildren: () => import("./dashboards/backoffice/backoffice.module").then(m => m.BackofficeModule)
  },
  {path: 'equipments', component: EquipmentListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
