import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Equipment, IEquipment} from "../equipment.model";
import {Pagination} from "../../../../core/request/request.model";
import {ResponseModel} from "../../../../core/request/response.model";
import {createRequestOption} from "../../../../core/request/request.util";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  baseUrl: string = environment.baseUrl + '/api/v1/equipment';

  constructor(private http: HttpClient) { }

  query(req?: Pagination): Observable<HttpResponse<ResponseModel<Equipment[]>>> {
    const options = createRequestOption(req);
    return this.http.get<ResponseModel<Equipment[]>>(this.baseUrl, { params: options, observe: 'response' });
  }

  createUser(user: IEquipment): Observable<IEquipment> {
    return this.http.post<IEquipment>(this.baseUrl, user);
  }

  available(params: {startDate: string, endDate: string}): Observable<ResponseModel<Equipment[]>> {
    const options = createRequestOption(params);
    return this.http.get<ResponseModel<Equipment[]>>(
      this.baseUrl + '/available',
      {params: options}
    );
  }
}
