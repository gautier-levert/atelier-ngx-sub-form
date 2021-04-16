import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Controls, NgxSubFormComponent, subformComponentProviders} from 'ngx-sub-form';
import {SpeederForm} from '../../form/speeder-form';

@Component({
  selector: 'app-speeder-form',
  templateUrl: './speeder-form.component.html',
  styleUrls: ['./speeder-form.component.scss'],
  providers: subformComponentProviders(SpeederFormComponent),
})
export class SpeederFormComponent extends NgxSubFormComponent<SpeederForm> {

  constructor() {
    super();
  }

  protected getFormControls(): Controls<SpeederForm> {
    return {
      maximumSpeed: new FormControl(null, [Validators.required, Validators.min(0)]),
    };
  }

  protected getDefaultValues(): Partial<SpeederForm> | null {
    return {
      maximumSpeed: 0
    };
  }
}
