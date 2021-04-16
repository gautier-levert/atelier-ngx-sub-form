import {DroidType} from '../../domain/droid/droid-type.enum';
import {AssassinDroidForm} from './assassin-droid-form';
import {AstromechDroidForm} from './astromech-droid-form';
import {MedicalDroidForm} from './medical-droid-form';
import {ProtocolDroidForm} from './protocol-droid-form';

export interface DroidForm {
  droidType: DroidType;
  color: string;
  name: string;
  assassin: AssassinDroidForm | null;
  astromech: AstromechDroidForm | null;
  medical: MedicalDroidForm | null;
  protocol: ProtocolDroidForm | null;
}
