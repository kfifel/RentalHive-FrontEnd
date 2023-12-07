import { Component, OnInit } from '@angular/core';
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  color: boolean = false;

  constructor(private toastService: NgToastService) { }

  ngOnInit(): void {
    this.toastService.info({detail: "this is info", duration: 5_000, summary: "summary"})
  }

}
