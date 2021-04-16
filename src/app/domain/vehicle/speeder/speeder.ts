import {CrewMember} from '../crew-member';
import {Vehicle} from '../vehicle';
import {VehicleType} from '../vehicle-type.enum';

export class Speeder extends Vehicle {

  constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    color: string,
    canFire: boolean,
    crewMembers: CrewMember[],
    public maximumSpeed: number,
  ) {
    super(id, title, imageUrl, price, VehicleType.SPEEDER, color, canFire, crewMembers);
  }

}
