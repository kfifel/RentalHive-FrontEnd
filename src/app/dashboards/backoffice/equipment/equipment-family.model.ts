export interface IEquipmentFamily {
  id: number;
  name: string;
}

export class EquipmentFamily implements IEquipmentFamily {
  constructor(
    public id: number,
    public name: string
  ) {}

}
