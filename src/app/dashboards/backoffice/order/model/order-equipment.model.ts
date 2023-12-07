import {Order} from "./order.model";

export class OrderEquipment {
  constructor(
    public id: number,
    public rentPrice: number | null,
    public order: Order,
    //public EquipmentItem equipmentItem
  ) {
  }
}
