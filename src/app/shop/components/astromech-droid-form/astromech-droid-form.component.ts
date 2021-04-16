import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Controls, NgxSubFormComponent, subformComponentProviders} from 'ngx-sub-form';
import {AstromechDroidShape} from '../../../domain/droid/astromech/astromech-droid-shape.enum';
import {AstromechDroidForm} from '../../form/astromech-droid-form';

@Component({
  selector: 'app-astromech-droid-form',
  templateUrl: './astromech-droid-form.component.html',
  styleUrls: ['./astromech-droid-form.component.scss'],
  providers: subformComponentProviders(AstromechDroidFormComponent),
})
export class AstromechDroidFormComponent extends NgxSubFormComponent<AstromechDroidForm> {

  shapes = Object.values(AstromechDroidShape);

  constructor() {
    super();
  }

  protected getFormControls(): Controls<AstromechDroidForm> {
    return {
      shape: new FormControl(null, [Validators.required]),
      toolCount: new FormControl(null,
        [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]
      )
    };
  }


  protected getDefaultValues(): Partial<AstromechDroidForm> | null {
    return {
      shape: AstromechDroidShape.REGULAR,
      toolCount: 1
    };
  }
}
