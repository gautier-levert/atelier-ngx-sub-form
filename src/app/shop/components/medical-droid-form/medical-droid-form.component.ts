import {Component} from '@angular/core';
import {FormControl, ValidationErrors} from '@angular/forms';
import {Controls, FormGroupOptions, NgxSubFormComponent, subformComponentProviders} from 'ngx-sub-form';
import {TypedFormGroup} from 'ngx-sub-form/lib/ngx-sub-form-utils';
import {MedicalDroidForm} from '../../form/medical-droid-form';

@Component({
  selector: 'app-medical-droid-form',
  templateUrl: './medical-droid-form.component.html',
  styleUrls: ['./medical-droid-form.component.scss'],
  providers: subformComponentProviders(MedicalDroidFormComponent),
})
export class MedicalDroidFormComponent extends NgxSubFormComponent<MedicalDroidForm> {

  constructor() {
    super();
  }

  protected getFormControls(): Controls<MedicalDroidForm> {
    return {
      canFixRobots: new FormControl(null),
      canHealHumans: new FormControl(null),
    };
  }


  protected getFormGroupControlOptions(): FormGroupOptions<MedicalDroidForm> {
    return {
      validators: [this.mustHealSomething]
    };
  }

  mustHealSomething(formGroup: TypedFormGroup<MedicalDroidForm>): ValidationErrors | null {
    const value = formGroup.value;

    if (!value.canFixRobots && !value.canHealHumans) {
      return {
        mustHealSomething: true
      };
    }

    return null;
  }
}
