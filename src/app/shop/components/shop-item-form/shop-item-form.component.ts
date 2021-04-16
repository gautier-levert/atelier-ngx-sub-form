import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Controls, DataInput, NgxRootFormComponent} from 'ngx-sub-form';
import {v4 as uuid} from 'uuid';
import {AssassinDroid} from '../../../domain/droid/assassin/assassin-droid';
import {AssassinDroidWeapon} from '../../../domain/droid/assassin/assassin-droid-weapon.enum';
import {AstromechDroid} from '../../../domain/droid/astromech/astromech-droid';
import {AstromechDroidShape} from '../../../domain/droid/astromech/astromech-droid-shape.enum';
import {Droid} from '../../../domain/droid/droid';
import {DroidType} from '../../../domain/droid/droid-type.enum';
import {MedicalDroid} from '../../../domain/droid/medical/medical-droid';
import {Language} from '../../../domain/droid/protocol/language.enum';
import {ProtocolDroid} from '../../../domain/droid/protocol/protocol-droid';
import {ShopItem} from '../../../domain/shop-item';
import {ShopItemType} from '../../../domain/shop-item-type.enum';
import {Spaceship} from '../../../domain/vehicle/spaceship/spaceship';
import {Speeder} from '../../../domain/vehicle/speeder/speeder';
import {VehicleType} from '../../../domain/vehicle/vehicle-type.enum';
import {DroidForm} from '../../form/droid-form';
import {ShopItemForm} from '../../form/shop-item-form';

@Component({
  selector: 'app-shop-item-form',
  templateUrl: './shop-item-form.component.html',
  styleUrls: ['./shop-item-form.component.scss']
})
export class ShopItemFormComponent extends NgxRootFormComponent<ShopItem, ShopItemForm> {

  itemTypes = Object.values(ShopItemType);

  @DataInput()
  // tslint:disable-next-line:no-input-rename
  @Input('shopItem')
  public dataInput: ShopItem | null | undefined;

  // tslint:disable-next-line:no-output-rename
  @Output('shopItemChange')
  public dataOutput = new EventEmitter<ShopItem>();

  constructor() {
    super();
  }

  protected getFormControls(): Controls<ShopItemForm> {
    return {
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      imageUrl: new FormControl(null, {
        validators: [Validators.pattern(/^(http|https):\/\/[^ "]+$/)]
      }),
      price: new FormControl(null, {
        validators: [Validators.required, Validators.min(0)]
      }),
      itemType: new FormControl(null, {
        validators: [Validators.required]
      }),
      vehicle: new FormControl(null),
      droid: new FormControl(null),
    };
  }

  protected getDefaultValues(): Partial<ShopItemForm> | null {
    return {
      price: 0,
    };
  }


  protected transformToFormGroup(obj: ShopItem | null, defaultValues: Partial<ShopItemForm> | null): ShopItemForm | null {
    let droidForm: DroidForm | null = null;
    if (obj?.itemType === ShopItemType.DROID) {
      const droid = obj as Droid;
      switch (droid.droidType) {
        case DroidType.PROTOCOL:
          const protocolDroid = droid as ProtocolDroid;
          droidForm = {
            color: droid.color,
            droidType: droid.droidType,
            name: droid.name,
            assassin: null,
            astromech: null,
            medical: null,
            protocol: {
              spokenLanguages: protocolDroid.spokenLanguages
            },
          };
          break;
        case DroidType.MEDICAL:
          const medicalDroid = droid as MedicalDroid;
          droidForm = {
            color: droid.color,
            droidType: droid.droidType,
            name: droid.name,
            assassin: null,
            astromech: null,
            medical: {
              canFixRobots: medicalDroid.canFixRobots,
              canHealHumans: medicalDroid.canHealHumans,
            },
            protocol: null,
          };
          break;
        case DroidType.ASTROMECH:
          const astromechDroid = droid as AstromechDroid;
          droidForm = {
            color: droid.color,
            droidType: droid.droidType,
            name: droid.name,
            assassin: null,
            astromech: {
              shape: astromechDroid.shape,
              toolCount: astromechDroid.toolCount,
            },
            medical: null,
            protocol: null,
          };
          break;
        case DroidType.ASSASSIN:
          const assassinDroid = droid as AssassinDroid;
          droidForm = {
            color: droid.color,
            droidType: droid.droidType,
            name: droid.name,
            assassin: {
              weapons: assassinDroid.weapons,
            },
            astromech: null,
            medical: null,
            protocol: null,
          };
          break;
      }
    }

    return {
      title: (obj?.title ?? defaultValues?.title ?? null) as string,
      imageUrl: (obj?.imageUrl ?? defaultValues?.imageUrl ?? null) as string,
      price: (obj?.price ?? defaultValues?.price ?? null) as number,
      itemType: (obj?.itemType ?? defaultValues?.itemType ?? null) as ShopItemType,
      droid: droidForm,
      vehicle: null,
    };
  }

  protected transformFromFormGroup(formValue: ShopItemForm): ShopItem | null {
    switch (formValue.itemType) {
      case ShopItemType.DROID:
        switch (formValue.droid?.droidType) {
          case DroidType.PROTOCOL:
            return new ProtocolDroid(
              this.dataValue?.id ?? uuid(),
              formValue.title,
              formValue.imageUrl,
              formValue.price,
              formValue.droid?.color,
              formValue.droid?.name,
              (formValue.droid?.protocol?.spokenLanguages) as Language[]
            );
          case DroidType.MEDICAL:
            return new MedicalDroid(
              this.dataValue?.id ?? uuid(),
              formValue.title,
              formValue.imageUrl,
              formValue.price,
              formValue.droid?.color,
              formValue.droid?.name,
              (formValue.droid?.medical?.canHealHumans) as boolean,
              (formValue.droid?.medical?.canFixRobots) as boolean
            );
          case DroidType.ASTROMECH:
            return new AstromechDroid(
              this.dataValue?.id ?? uuid(),
              formValue.title,
              formValue.imageUrl,
              formValue.price,
              formValue.droid?.color,
              formValue.droid?.name,
              (formValue.droid?.astromech?.toolCount) as number,
              (formValue.droid?.astromech?.shape) as AstromechDroidShape,
            );
          case DroidType.ASSASSIN:
            return new AssassinDroid(
              this.dataValue?.id ?? uuid(),
              formValue.title,
              formValue.imageUrl,
              formValue.price,
              formValue.droid?.color,
              formValue.droid?.name,
              (formValue.droid?.assassin?.weapons) as AssassinDroidWeapon[]
            );
        }
        break;
      case ShopItemType.VEHICLE:
        switch (formValue.vehicle?.vehicleType) {
          case VehicleType.SPACESHIP:
            return new Spaceship(
              this.dataValue?.id ?? uuid(),
              formValue.title,
              formValue.imageUrl,
              formValue.price,
              formValue.vehicle.color,
              formValue.vehicle.canFire,
              formValue.vehicle.crewMembers,
              (formValue.vehicle?.spaceship?.wingCount) as number,
            );
          case VehicleType.SPEEDER:
            return new Speeder(
              this.dataValue?.id ?? uuid(),
              formValue.title,
              formValue.imageUrl,
              formValue.price,
              formValue.vehicle.color,
              formValue.vehicle.canFire,
              formValue.vehicle.crewMembers,
              (formValue.vehicle?.speeder?.maximumSpeed) as number,
            );
        }
        break;
    }
    return null;
  }
}
