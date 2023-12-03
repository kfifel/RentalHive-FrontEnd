import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-v',
  templateUrl: './sidebar-v.component.html',
  styleUrls: ['./sidebar-v.component.css']
})
export class SidebarVComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSidebarClosed = true;
  isDarkMode = false;

  toggleSidebar() {
    console.log("hi")
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  openSearch() {
    this.isSidebarClosed = false;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

}
