import {CrewMember} from '../crew-member';
import {Vehicle} from '../vehicle';
import {VehicleType} from '../vehicle-type.enum';

export class Spaceship extends Vehicle {

  constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    color: string,
    canFire: boolean,
    crewMembers: CrewMember[],
    public wingCount: number,
  ) {
    super(id, title, imageUrl, price, VehicleType.SPACESHIP, color, canFire, crewMembers);
  }

}
