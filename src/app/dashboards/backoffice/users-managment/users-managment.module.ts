import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { UpdateComponent } from './update/update.component';
import { userManagementRoutes } from "./user-management.route";
import {SharedModule} from "../../../shared/shared.module";
import {MaterialModule} from "../../../matrial.module";

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userManagementRoutes),
    FormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class UsersManagementModule { }
