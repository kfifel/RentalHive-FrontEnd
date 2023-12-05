import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageTitleComponent} from "./page-title/page-title.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarVComponent} from "./sidebar-v/sidebar-v.component";
import {MaterialModule} from "../matrial.module";

@NgModule({
  declarations: [
    PageTitleComponent,
    SidebarComponent,
    SidebarVComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PageTitleComponent,
    SidebarComponent,
    SidebarVComponent
  ]
})
export class SharedModule { }
