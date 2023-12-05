import { Component, OnInit } from '@angular/core';
import {IUser, User} from "../../../../user/user.model";
import {UserService} from "../../../../user/service/user.service";
import {HttpResponse} from "@angular/common/http";
import {ResponseModel} from "../../../../core/request/response.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] | null = null;
  isLoading: boolean = false;
  search: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.isLoading = true;
    this.userService
      .query()
      .subscribe({
        next: (res: HttpResponse<ResponseModel<User[]>>) => {
          this.isLoading = false;
          this.onSuccess(res.body);
        },
        error: () => (this.isLoading = false),
        complete: () => (this.isLoading = false),
      });
  }

  onSuccess(response: ResponseModel<IUser[]> | any): void {
    if(response.result)
      this.users = response.result;
  }


}
