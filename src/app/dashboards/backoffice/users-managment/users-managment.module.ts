import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterModule} from "@angular/router";
import { UpdateComponent } from './update/update.component';
import { userManagementRoutes } from "./user-management.route";


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule.forChild(userManagementRoutes)
  ]
})
export class UsersManagementModule { }
