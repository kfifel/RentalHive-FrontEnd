import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../service/equipment.service";
import {Equipment, IEquipment} from "../equipment.model";
import {HttpResponse} from "@angular/common/http";
import {ResponseModel} from "../../core/request/response.model";

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  equipmentList: Equipment[] | null = null;
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  private loadAll() {
    this.equipmentService.query().subscribe({
      next: (res: HttpResponse<ResponseModel<Equipment[]>>) => {
        console.log(res)
        this.onSuccess(res.body);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSuccess(equipmentList: ResponseModel<Equipment[]> | null) {
    if(equipmentList && equipmentList?.result)
      this.equipmentList = equipmentList.result;
  }
}
