import {AstromechDroidShape} from '../../domain/droid/astromech/astromech-droid-shape.enum';

export interface AstromechDroidForm {
  toolCount: number;
  shape: AstromechDroidShape;
}
