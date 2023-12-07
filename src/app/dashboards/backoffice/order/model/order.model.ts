import {OrderEquipment} from "./order-equipment.model";

export class Order {
  constructor(
    public id: number,
    public rentStartDate: Date,
    public rentEndDate: Date,
    public constructLocation: object,
    public orderEquipments: OrderEquipment[]
    //public User user;
    //public offer: Offer;
  ) {
  }
}
