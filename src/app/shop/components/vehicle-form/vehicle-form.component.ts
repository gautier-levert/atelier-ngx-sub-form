import {Component} from '@angular/core';
import {VehicleType} from '../../../domain/vehicle/vehicle-type.enum';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent {

  vehicleTypes = Object.values(VehicleType);

  // TODO

  constructor() {
  }

}
