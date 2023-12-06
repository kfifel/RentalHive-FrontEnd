import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutsComponent} from "./layouts.component";
import {ClientLayoutComponent} from "./client-layout/client-layout.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../matrial.module";

@NgModule({
  declarations: [
    LayoutsComponent,
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ]
})
export class LayoutsModule { }
