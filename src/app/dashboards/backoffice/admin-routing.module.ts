import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user-management',
        loadChildren: () => import('./users-managment/users-managment.module').then(m => m.UsersManagementModule),
      }
      ])
    ]
})
export class AdminRoutingModule {}
