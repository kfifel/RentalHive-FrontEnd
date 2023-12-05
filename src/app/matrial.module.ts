import { NgModule } from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  exports: [
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
