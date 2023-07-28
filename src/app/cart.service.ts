import { Injectable } from '@angular/core';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Item[] = [];

  addItem(item: Item) {
    let index = this.items.findIndex((cart) => cart.id === item.id);
    if (index !== -1) {
      this.items[index].quantity_inCart += 1;
    } else {
      item.quantity_inCart = 1;
      this.items.push(item);
    }
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  total() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }
}
