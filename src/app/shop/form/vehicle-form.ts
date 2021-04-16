import {CrewMember} from '../../domain/vehicle/crew-member';
import {Speeder} from '../../domain/vehicle/speeder/speeder';
import {VehicleType} from '../../domain/vehicle/vehicle-type.enum';
import {SpaceshipForm} from './spaceship-form';

export interface VehicleForm {
  vehicleType: VehicleType;
  color: string;
  canFire: boolean;
  crewMembers: CrewMember[];
  spaceship: SpaceshipForm | null;
  speeder: Speeder | null;
}
