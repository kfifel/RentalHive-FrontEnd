import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open => closed', [
        animate('0.3s ease-in-out'),
      ]),
      transition('closed => open', [
        animate('0.3s ease-in-out'),
      ]),
    ]),
  ],
})
export class ClientLayoutComponent {
  drawerState = 'open';

  toggleDrawer() {
    this.drawerState = this.drawerState === 'open' ? 'closed' : 'open';
  }
  constructor() {
  }

}
