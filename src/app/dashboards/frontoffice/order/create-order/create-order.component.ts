import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Equipment} from "../../../backoffice/equipment/equipment.model";
import {EquipmentService} from "../../../backoffice/equipment/service/equipment.service";
import {DatePipe} from "@angular/common";
import {NgToastService} from "ng-angular-popup";
import {MatStepper} from "@angular/material/stepper";
import {CustomError} from "../../../../core/request/custom-error.model";
import {CreateOrder} from "../create-order.model";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  firstFormGroup: FormGroup = this._formBuilder.group({
    startDate: [null, Validators.required],
    endDate: [null, Validators.required]
  });
  reservationFormGroup: FormGroup = this._formBuilder.group({
    equipments: [[]],
  });
  startDate: Date | null = null;
  endDate: Date | null = null;
  equipmentsAvailable: Equipment[] = [];
  toReserveEquipments: Map<number, Equipment> = new Map<number, Equipment>();


  @ViewChild('stepper') stepper!: MatStepper;
  errors: CustomError[] = [];
  constructor(private _formBuilder: FormBuilder,
              private equipmentService: EquipmentService,
              private datePipe: DatePipe,
              private notifyService: NgToastService,
              private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  fetchEquipmentAvailable() {
    if(this.startDate === null || this.endDate === null){
      this.notifyService.error({detail: "Please select a date range", duration: 5_000});
      return;
    }

    const isoStartDate = this.dateToString(this.startDate);
    const isoEndDate = this.dateToString(this.endDate);

    if(isoEndDate === null || isoStartDate === null){
      this.notifyService.error({detail: "Some things went wrong", duration: 5_000});
      return;
    }

    this.equipmentService.available({startDate: isoStartDate, endDate: isoEndDate})
      .subscribe({
        next: (response) => {
          if(response.result){
            this.equipmentsAvailable = response.result;
            this.stepper.next();
          }
          else
            this.notifyService.error({
              detail: "somethings went wrong",
              duration: 6_000
            })
        },
        error: (response) => {
          console.log(response)
          this.errors = response.error.errors
          this.notifyService.error({
            detail: response.error.message,
            duration: 10_000
          })
        }
      });
  }

  dateToString(date?: Date | null) {
    return this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss');
  }

  updateStartDate(event: any): void {
    this.firstFormGroup.get('startDate')?.setValue(event);
  }

  updateEndDate(event: any) {
    this.firstFormGroup.get('endDate')?.setValue(event);
  }

  addReservation(reserved: any, equipment: Equipment, id?: number) {
    const quantityReserved: number = +reserved.value;
    if(!id || !this.isValidQuantity(quantityReserved, id)) {
      this.notifyService.warning({detail: "Quantity interred is more than the available!"})
      return;
    }
    equipment.quantityReserved = quantityReserved;
    this.toReserveEquipments.set(id, equipment);
    console.log(this.toReserveEquipments)
  }

  onReserve() {
    if(this.toReserveEquipments.size == 0){
      this.onError("you can't reserve with out selecting any equipments");
    }

    const isoStartDate = this.dateToString(this.startDate);
    const isoEndDate = this.dateToString(this.endDate);

    if(isoStartDate === null || isoEndDate === null) {
      this.onError("start or end dates shouldn't be null");
        return;
    }
    let equipments: Equipment[] = [];

    this.toReserveEquipments.forEach((equipment) => {
      equipments.push(equipment);
    })

    let order = new CreateOrder(
      equipments,
      isoStartDate,
      isoEndDate
    )

    this.handleReserve(order);
  }



  isValidQuantity(reservedQte: number, id?: number) {
    if(!id)
      return false;

    let equipmentSearched = this.findById(id);
    if(!equipmentSearched)
      this.onError("no equipment with this id: " + id)
    return equipmentSearched?.quantity &&  equipmentSearched.quantity >=  reservedQte;
  }

  findById(id: number): Equipment | null {
    let equipment1 = this.equipmentsAvailable.filter(equipment => equipment.id == id);
    if (equipment1.length > 0)
      return equipment1[0];
    return null;
  }

  onSuccess(message: string) {
    this.notifyService.success({
      detail: message,
      duration: 6_000
    })
  }

  onError(message: string) {
    this.notifyService.error({
      detail: message,
      duration: 6_000
    })
  }

  getError(field: string) {
    let customErrors = this.errors.filter(error => error.field === field);
    return customErrors[0]?.message;
  }

  private handleReserve(order: CreateOrder) {
    this.orderService.creteOrder(order).subscribe({
      next: (resp) => {
        this.onSuccess(resp.message)
        // slid to next stepper
        this.stepper.next();
      },
      error: (error) => {
        console.error(error)
      }
    });
  }
}
