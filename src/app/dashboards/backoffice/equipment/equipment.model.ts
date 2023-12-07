import {EquipmentFamily} from "./equipment-family.model";

export interface IEquipment {
  id: number;
  name: string;
  quantity: number;
  equipmentFamily: EquipmentFamily | null;
}

export class Equipment implements IEquipment {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public equipmentFamily: EquipmentFamily | null
  ) {}

}
