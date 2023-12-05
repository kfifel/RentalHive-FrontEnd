import {Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";
import {DetailComponent} from "./detail/detail.component";


export const userManagementRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'new',
    component: UpdateComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
  }
];
