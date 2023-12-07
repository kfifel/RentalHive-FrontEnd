import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {PageTitleComponent} from "./page-title/page-title.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarVComponent} from "./sidebar-v/sidebar-v.component";
import {MaterialModule} from "../matrial.module";
import {RouterLinkWithHref} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {NgToastModule} from "ng-angular-popup";


@NgModule({
  declarations: [
    PageTitleComponent,
    SidebarComponent,
    SidebarVComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLinkWithHref,
    NgToastModule
  ],
  exports: [
    PageTitleComponent,
    SidebarComponent,
    SidebarVComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
})
export class SharedModule { }
