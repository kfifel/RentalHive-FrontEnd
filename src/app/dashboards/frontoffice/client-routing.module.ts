import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ClientDashboardComponent} from "./home/client-dashboard.component";
import {MaterialModule} from "../../matrial.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ClientDashboardComponent, ClientDashboardComponent],
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientDashboardComponent,
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      }
    ]),
    FormsModule,
  ]
})
export class ClientRoutingModule {}
