import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Controls, NgxSubFormComponent, subformComponentProviders} from 'ngx-sub-form';
import {SpaceshipForm} from '../../form/spaceship-form';

@Component({
  selector: 'app-spaceship-form',
  templateUrl: './spaceship-form.component.html',
  styleUrls: ['./spaceship-form.component.scss'],
  providers: subformComponentProviders(SpaceshipFormComponent)
})
export class SpaceshipFormComponent extends NgxSubFormComponent<SpaceshipForm> {

  constructor() {
    super();
  }

  protected getFormControls(): Controls<SpaceshipForm> {
    return {
      wingCount: new FormControl(null,
        [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]
      )
    };
  }

  protected getDefaultValues(): Partial<SpaceshipForm> | null {
    return {
      wingCount: 2
    };
  }
}
