import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {PageTitleComponent} from "./page-title/page-title.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarVComponent} from "./sidebar-v/sidebar-v.component";
import {MaterialModule} from "../matrial.module";
import {RouterLinkWithHref} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    PageTitleComponent,
    SidebarComponent,
    SidebarVComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLinkWithHref
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
