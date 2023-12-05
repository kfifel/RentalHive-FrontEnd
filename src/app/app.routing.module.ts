import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LayoutsComponent} from "./layouts/layouts.component";
import {EquipmentModule} from "./dashboards/backoffice/equipment/equipment.module";
import {ClientLayoutComponent} from "./layouts/client-layout/client-layout.component";
import {ClientRoutingModule} from "./dashboards/frontoffice/client-routing.module";


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutsComponent,
    loadChildren: () => import("./dashboards/backoffice/admin-routing.module").then(m => m.AdminRoutingModule)
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    loadChildren: () => import("./dashboards/frontoffice/client-routing.module").then(m => m.ClientRoutingModule)
  },
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
