import {Equipment} from "../../backoffice/equipment/equipment.model";

export class CreateOrder {
  constructor(
    public equipments: Equipment[],
    public startDate: string,
    public endDate: string
  //Location location;
  ) {
  }
}
