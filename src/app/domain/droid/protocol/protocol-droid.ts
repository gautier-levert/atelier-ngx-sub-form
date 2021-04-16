import {Droid} from '../droid';
import {DroidType} from '../droid-type.enum';
import {Language} from './language.enum';

export class ProtocolDroid extends Droid {

  constructor(
    id: string,
    title: string,
    imageUrl: string | null,
    price: number,
    color: string,
    name: string,
    public spokenLanguages: Language[],
  ) {
    super(id, title, imageUrl, price, DroidType.PROTOCOL, color, name);
  }
}
