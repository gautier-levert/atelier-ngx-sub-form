import {ShopItemType} from './shop-item-type.enum';

export abstract class ShopItem {

  protected constructor(
    public id: string,
    public title: string,
    public imageUrl: string | null,
    public price: number,
    public readonly itemType: ShopItemType
  ) {
  }

}
