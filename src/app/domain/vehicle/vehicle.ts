import {ShopItem} from '../shop-item';
import {ShopItemType} from '../shop-item-type.enum';
import {CrewMember} from './crew-member';
import {VehicleType} from './vehicle-type.enum';

export abstract class Vehicle extends ShopItem {

  protected constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    public readonly vehicleType: VehicleType,
    public color: string,
    public canFire: boolean,
    public crewMembers: CrewMember[],
  ) {
    super(id, title, imageUrl, price, ShopItemType.VEHICLE);
  }

}
