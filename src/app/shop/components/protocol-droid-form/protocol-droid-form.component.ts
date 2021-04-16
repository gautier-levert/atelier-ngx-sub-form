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
import {Language} from '../../../domain/droid/protocol/language.enum';
import {ProtocolDroidForm} from '../../form/protocol-droid-form';

@Component({
  selector: 'app-protocol-droid-form',
  templateUrl: './protocol-droid-form.component.html',
  styleUrls: ['./protocol-droid-form.component.scss'],
  providers: subformComponentProviders(ProtocolDroidFormComponent),
})
export class ProtocolDroidFormComponent extends NgxSubFormComponent<ProtocolDroidForm>
  implements NgxFormWithArrayControls<ProtocolDroidForm> {

  languages = Object.values(Language);

  constructor() {
    super();
  }

  protected getFormControls(): Controls<ProtocolDroidForm> {
    return {
      spokenLanguages: new FormArray([]),
    };
  }

  createFormArrayControl(
    key: ArrayPropertyKey<ProtocolDroidForm>,
    value: ArrayPropertyValue<ProtocolDroidForm> | null
  ): FormControl {
    switch (key) {
      case 'spokenLanguages':
        return new FormControl(value, [Validators.required]);
      default:
        return new FormControl(value);
    }
  }

  removeLanguage(index: number): void {
    this.formGroupControls.spokenLanguages.removeAt(index);
  }

  addLanguage(): void {
    this.formGroupControls.spokenLanguages.push(
      this.createFormArrayControl('spokenLanguages', null)
    );
  }
}
