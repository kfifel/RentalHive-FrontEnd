import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {CreateOrder} from "../create-order.model";
import {Observable} from "rxjs";
import {ResponseModel} from "../../../../core/request/response.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = environment.baseUrl + '/api/v1/order';
  constructor(private http: HttpClient) {
  }

  creteOrder(order: CreateOrder) :Observable<ResponseModel<CreateOrder>> {
    return this.http.post<ResponseModel<CreateOrder>>(this.baseUrl, order);
  }
}
