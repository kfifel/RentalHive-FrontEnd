import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutsComponent} from "./layouts.component";
import {ClientLayoutComponent} from "./client-layout/client-layout.component";
import {SharedModule} from "../shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    LayoutsComponent,
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ]
})
export class LayoutsModule { }
