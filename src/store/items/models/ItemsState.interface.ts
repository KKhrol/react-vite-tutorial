import { ItemInterface } from 'models/items/Item.interface';

export interface ItemsStateInterface {
  items: ItemInterface[];
  loading: boolean;
}
