import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ClientDashboardComponent} from "./home/client-dashboard.component";


@NgModule({
  declarations: [ClientDashboardComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ClientDashboardComponent,
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      }
    ])
  ]
})
export class ClientRoutingModule {}
