import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IUser} from "../user.model";
import {Observable} from "rxjs";
import {Pagination} from "../../core/request/request.model";
import {createRequestOption} from "../../core/request/request.util";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:8081/api/v1/user';

  constructor(private http: HttpClient) {
  }

  query(req?: Pagination): Observable<HttpResponse<IUser[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUser[]>(this.baseUrl, { params: options, observe: 'response' });
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.baseUrl, user);
  }
}
