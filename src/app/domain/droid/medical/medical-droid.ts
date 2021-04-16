import {Droid} from '../droid';
import {DroidType} from '../droid-type.enum';

export class MedicalDroid extends Droid {

  constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    color: string,
    name: string,
    public canHealHumans: boolean,
    public canFixRobots: boolean,
  ) {
    super(id, title, imageUrl, price, DroidType.MEDICAL, color, name);
  }

}
