import {Component} from '@angular/core';
import {FormArray, FormControl, Validators} from '@angular/forms';
import {
  ArrayPropertyKey,
  ArrayPropertyValue,
  Controls,
  NgxFormWithArrayControls,
  NgxSubFormComponent,
  subformComponentProviders
} from 'ngx-sub-form';
import {CrewMember} from '../../../domain/vehicle/crew-member';
import {VehicleType} from '../../../domain/vehicle/vehicle-type.enum';
import {VehicleForm} from '../../form/vehicle-form';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
  providers: subformComponentProviders(VehicleFormComponent),
})
export class VehicleFormComponent extends NgxSubFormComponent<VehicleForm>
  implements NgxFormWithArrayControls<VehicleForm> {

  vehicleTypes = Object.values(VehicleType);

  constructor() {
    super();
  }

  protected getFormControls(): Controls<VehicleForm> {
    return {
      canFire: new FormControl(null),
      color: new FormControl(null, Validators.required),
      crewMembers: new FormArray([]),
      vehicleType: new FormControl(null, Validators.required),
      spaceship: new FormControl(null),
      speeder: new FormControl(null),
    };
  }

  protected getDefaultValues(): Partial<VehicleForm> | null {
    return {
      crewMembers: [
        new CrewMember('Sarah', 'Smith')
      ]
    };
  }

  createFormArrayControl(key: ArrayPropertyKey<VehicleForm>, value: ArrayPropertyValue<VehicleForm> | null): FormControl {
    switch (key) {
      case 'crewMembers':
        return new FormControl(value);
      default:
        return new FormControl(value);
    }
  }

  removeCrewMember(index: number): void {
    this.formGroupControls.crewMembers.removeAt(index);
  }

  addCrewMember(): void {
    this.formGroupControls.crewMembers.push(
      this.createFormArrayControl('crewMembers', null)
    );
  }

}
