import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from "./user/list/user.component";
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentFamilyComponent } from './equipment/equipment-family/equipment-family.component';
import { AddComponent } from './user/add/add.component';
import { LoginComponent } from './login/login.component';
import { SidebarVComponent } from './shared/sidebar-v/sidebar-v.component';
import { LayoutsComponent } from './layouts/layouts.component';
import {MaterialModule} from "./matrial.module";
import {AppRoutingModule} from "./app.routing.module";
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SidebarComponent,
    PageTitleComponent,
    HomeComponent,
    EquipmentListComponent,
    EquipmentFamilyComponent,
    AddComponent,
    LoginComponent,
    SidebarVComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    PageTitleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
