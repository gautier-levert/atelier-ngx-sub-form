import {ShopItem} from '../shop-item';
import {ShopItemType} from '../shop-item-type.enum';
import {DroidType} from './droid-type.enum';

export abstract class Droid extends ShopItem {

  protected constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    public readonly droidType: DroidType,
    public color: string,
    public name: string,
  ) {
    super(id, title, imageUrl, price, ShopItemType.DROID);
  }
}
