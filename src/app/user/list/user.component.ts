import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {IUser, User} from "../user.model";
import {HttpResponse} from "@angular/common/http";
import {ResponseModel} from "../../core/request/response.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dateString: string = '2022-12-01T00:00:00.000Z';
  price: number = 123.456789;
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
      });
  }

  onSuccess(response: ResponseModel<IUser[]> | any): void {
    if(response.result)
      this.users = response.result;
  }

}
