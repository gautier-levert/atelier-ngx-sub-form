import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Controls, NgxSubFormComponent, subformComponentProviders} from 'ngx-sub-form';
import {CrewMember} from '../../../domain/vehicle/crew-member';

@Component({
  selector: 'app-crew-member-form',
  templateUrl: './crew-member-form.component.html',
  styleUrls: ['./crew-member-form.component.scss'],
  providers: subformComponentProviders(CrewMemberFormComponent)
})
export class CrewMemberFormComponent extends NgxSubFormComponent<CrewMember> {

  constructor() {
    super();
  }

  protected getFormControls(): Controls<CrewMember> {
    return {
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
    };
  }

  protected getDefaultValues(): Partial<CrewMember> | null {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  }
}
