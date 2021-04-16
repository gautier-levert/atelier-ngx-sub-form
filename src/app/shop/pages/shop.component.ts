import {Component} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {AstromechDroid} from '../../domain/droid/astromech/astromech-droid';
import {AstromechDroidShape} from '../../domain/droid/astromech/astromech-droid-shape.enum';
import {ShopItem} from '../../domain/shop-item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  item: ShopItem = new AstromechDroid(
    uuid(),
    'Robot Z6K',
    null,
    140000,
    '#fecdb7',
    'Z6K',
    5,
    AstromechDroidShape.REGULAR
  );

  constructor() {
  }
}
