import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {EquipmentService} from "../../../backoffice/equipment/service/equipment.service";
import {DatePipe} from "@angular/common";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    firstFormGroup: FormGroup = this._formBuilder.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
    secondFormGroup: FormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    startDate: Date | null = null;
    endDate: Date | null = null;
    @ViewChild('stepper') stepper!: MatStepper;
    constructor(private _formBuilder: FormBuilder,
                private equipmentService: EquipmentService,
                private datePipe: DatePipe
    ) { }

    ngOnInit(): void {
    }

  fetchEquipmentAvailable() {
    if(this.startDate === null || this.endDate === null){
      alert("Please select a date range");
      return;
    }

    const isoStartDate = this.datePipe.transform(this.startDate, 'yyyy-MM-ddTHH:mm:ss');
    const isoEndDate = this.datePipe.transform(this.endDate, 'yyyy-MM-ddTHH:mm:ss');

    if(isoEndDate === null || isoStartDate === null){
      alert("Some things went wrong");
      return;
    }

    this.equipmentService.available({startDate: isoStartDate, endDate: isoEndDate})
      .subscribe({
        next: (response) => {
          console.log(response);
          this.stepper.next();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
