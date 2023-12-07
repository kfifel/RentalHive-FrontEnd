import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "../../../../core/request/response.model";
import {Order} from "../model/order.model";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseApi = environment.baseUrl + "/api/v1/order"

  constructor(private http: HttpClient) { }

  query(): Observable<ResponseModel<Order[]>> {
    return this.http.get<ResponseModel<Order[]>>(this.baseApi);
  }
}
