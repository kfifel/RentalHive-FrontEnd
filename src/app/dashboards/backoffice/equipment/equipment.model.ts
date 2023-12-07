import {EquipmentFamily} from "./equipment-family.model";

export interface IEquipment {
  id?: number;
  name?: string;
  quantity?: number;
  quantityReserved?: number;
  family: EquipmentFamily;
}

export class Equipment implements IEquipment {
  constructor(
    public id?: number,
    public name?: string,
    public quantity?: number,
    public quantityReserved?: number,
    public family: EquipmentFamily = new EquipmentFamily()
  ) {}

}
