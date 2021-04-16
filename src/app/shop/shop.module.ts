import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {AssassinDroidFormComponent} from './components/assassin-droid-form/assassin-droid-form.component';

import {CrewMemberFormComponent} from './components/crew-member-form/crew-member-form.component';
import {DroidFormComponent} from './components/droid-form/droid-form.component';
import {ShopItemFormComponent} from './components/shop-item-form/shop-item-form.component';
import {SpaceshipFormComponent} from './components/spaceship-form/spaceship-form.component';
import {SpeederFormComponent} from './components/speeder-form/speeder-form.component';
import {VehicleFormComponent} from './components/vehicle-form/vehicle-form.component';
import {ShopComponent} from './pages/shop.component';
import {ShopRoutingModule} from './shop-routing.module';
import { AstromechDroidFormComponent } from './components/astromech-droid-form/astromech-droid-form.component';
import { MedicalDroidFormComponent } from './components/medical-droid-form/medical-droid-form.component';
import { ProtocolDroidFormComponent } from './components/protocol-droid-form/protocol-droid-form.component';

@NgModule({
  declarations: [
    ShopComponent,
    ShopItemFormComponent,
    VehicleFormComponent,
    CrewMemberFormComponent,
    SpaceshipFormComponent,
    SpeederFormComponent,
    DroidFormComponent,
    AssassinDroidFormComponent,
    AstromechDroidFormComponent,
    MedicalDroidFormComponent,
    ProtocolDroidFormComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
  ]
})
export class ShopModule {
}
