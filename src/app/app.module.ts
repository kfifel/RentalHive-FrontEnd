import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from "./user/list/user.component";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentFamilyComponent } from './equipment/equipment-family/equipment-family.component';
import { AddComponent } from './user/add/add.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from "./matrial.module";
import {AppRoutingModule} from "./app.routing.module";
import {SharedModule} from "./shared/shared.module";
import { LayoutsModule } from './layouts/layouts.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    EquipmentListComponent,
    EquipmentFamilyComponent,
    AddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutsModule,
    SharedModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
