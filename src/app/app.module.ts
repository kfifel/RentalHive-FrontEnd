import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {UserComponent} from "./user/list/user.component";
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SidebarComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
