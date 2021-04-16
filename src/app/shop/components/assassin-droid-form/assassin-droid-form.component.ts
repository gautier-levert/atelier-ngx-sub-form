import {Component} from '@angular/core';
import {FormArray, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {
  ArrayPropertyKey,
  ArrayPropertyValue,
  Controls,
  FormGroupOptions,
  NgxFormWithArrayControls,
  NgxSubFormComponent,
  subformComponentProviders
} from 'ngx-sub-form';
import {TypedFormGroup} from 'ngx-sub-form/lib/ngx-sub-form-utils';
import {AssassinDroidWeapon} from '../../../domain/droid/assassin/assassin-droid-weapon.enum';
import {AssassinDroidForm} from '../../form/assassin-droid-form';

@Component({
  selector: 'app-assassin-droid-form',
  templateUrl: './assassin-droid-form.component.html',
  styleUrls: ['./assassin-droid-form.component.scss'],
  providers: subformComponentProviders(AssassinDroidFormComponent),
})
export class AssassinDroidFormComponent extends NgxSubFormComponent<AssassinDroidForm>
  implements NgxFormWithArrayControls<AssassinDroidForm> {

  weapons = Object.values(AssassinDroidWeapon);

  constructor() {
    super();
  }

  protected getFormControls(): Controls<AssassinDroidForm> {
    return {
      weapons: new FormArray([])
    };
  }

  createFormArrayControl(
    key: ArrayPropertyKey<AssassinDroidForm>,
    value: ArrayPropertyValue<AssassinDroidForm> | null
  ): FormControl {
    switch (key) {
      case 'weapons':
        return new FormControl(value, {
          validators: Validators.required
        });
      default:
        return new FormControl(value);
    }
  }

  removeWeapon(index: number): void {
    this.formGroupControls.weapons.removeAt(index);
  }

  addWeapon(): void {
    this.formGroupControls.weapons.push(
      this.createFormArrayControl('weapons', null)
    );
  }

  protected getFormGroupControlOptions(): FormGroupOptions<AssassinDroidForm> {
    return {
      validators: [this.validateWeaponsLength]
    };
  }

  validateWeaponsLength(formGroup: TypedFormGroup<AssassinDroidForm>): ValidationErrors | null {
    const weaponsLength = formGroup.value?.weapons?.length ?? 0;

    if (weaponsLength < 2) {
      return {
        weaponsLength: {
          min: 2,
          actual: weaponsLength,
        }
      };
    }

    return null;
  }

}
