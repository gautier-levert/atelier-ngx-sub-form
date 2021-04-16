import {Droid} from '../droid';
import {DroidType} from '../droid-type.enum';
import {AssassinDroidWeapon} from './assassin-droid-weapon.enum';

export class AssassinDroid extends Droid {

  constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    color: string,
    name: string,
    public weapons: AssassinDroidWeapon[],
  ) {
    super(id, title, imageUrl, price, DroidType.ASSASSIN, color, name);
  }

}
