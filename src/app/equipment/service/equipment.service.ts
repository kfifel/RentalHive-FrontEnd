import { Injectable } from '@angular/core';
import {Pagination} from "../../core/request/request.model";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {createRequestOption} from "../../core/request/request.util";
import {Equipment, IEquipment} from "../equipment.model";
import {ResponseModel} from "../../core/request/response.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  baseUrl: string = 'http://localhost:8081/api/v1/equipment';

  constructor(private http: HttpClient) { }

  query(req?: Pagination): Observable<HttpResponse<ResponseModel<Equipment[]>>> {
    const options = createRequestOption(req);
    return this.http.get<ResponseModel<Equipment[]>>(this.baseUrl, { params: options, observe: 'response' });
  }

  createUser(user: IEquipment): Observable<IEquipment> {
    return this.http.post<IEquipment>(this.baseUrl, user);
  }
}
