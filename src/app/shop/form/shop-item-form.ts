import {ShopItemType} from '../../domain/shop-item-type.enum';
import {DroidForm} from './droid-form';

export interface ShopItemForm {
  title: string;
  imageUrl: string | null;
  price: number;
  itemType: ShopItemType;
  droid: DroidForm | null;
}
