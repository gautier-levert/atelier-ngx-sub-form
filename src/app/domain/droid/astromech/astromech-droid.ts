import {Droid} from '../droid';
import {DroidType} from '../droid-type.enum';
import {AstromechDroidShape} from './astromech-droid-shape.enum';

export class AstromechDroid extends Droid {

  constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    color: string,
    name: string,
    public toolCount: number,
    public shape: AstromechDroidShape,
  ) {
    super(id, title, imageUrl, price, DroidType.ASTROMECH, color, name);
  }

}
