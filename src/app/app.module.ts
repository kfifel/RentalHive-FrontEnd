import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
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
    RouterModule.forRoot([
      {path: 'users', component: UserComponent},
      {path: 'users/add', component: AddComponent},
      {path: 'equipments', component: EquipmentListComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
