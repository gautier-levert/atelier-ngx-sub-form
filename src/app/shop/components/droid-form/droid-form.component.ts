import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Controls, NgxSubFormComponent, subformComponentProviders} from 'ngx-sub-form';
import {DroidType} from '../../../domain/droid/droid-type.enum';
import {DroidForm} from '../../form/droid-form';

@Component({
  selector: 'app-droid-form',
  templateUrl: './droid-form.component.html',
  styleUrls: ['./droid-form.component.scss'],
  providers: subformComponentProviders(DroidFormComponent),
})
export class DroidFormComponent extends NgxSubFormComponent<DroidForm> {

  droidTypes = Object.values(DroidType);

  constructor() {
    super();
  }

  protected getFormControls(): Controls<DroidForm> {
    return {
      astromech: new FormControl(null),
      medical: new FormControl(null),
      protocol: new FormControl(null),
      assassin: new FormControl(null),
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      color: new FormControl(null),
      droidType: new FormControl(null, {
        validators: [Validators.required]
      }),
    };
  }
}
