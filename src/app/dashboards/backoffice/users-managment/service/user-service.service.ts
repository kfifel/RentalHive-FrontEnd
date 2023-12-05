import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IUser} from "../user.model";
import {Observable} from "rxjs";
import {Pagination} from "../../../../core/request/request.model";
import {createRequestOption} from "../../../../core/request/request.util";
import {ResponseModel} from "../../../../core/request/response.model";
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.baseUrl + '/api/v1/user';

  constructor(private http: HttpClient) {
  }

  query(req?: Pagination): Observable<HttpResponse<ResponseModel<IUser[]>>> {
    const options = createRequestOption(req);
    return this.http.get<ResponseModel<IUser[]>>(this.baseUrl, { params: options, observe: 'response' });
  }

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.baseUrl, user);
  }

  authorities(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl+'/authorities');
  }
}
