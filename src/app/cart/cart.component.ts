import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
@Input() carts!: Item[];
@Output() closeDialog = new EventEmitter();
@Output() totalCart = new EventEmitter();

  close() {
    this.closeDialog.emit();
  }

  total() {
    let total = 0;
    for (let i = 0; i < this.carts.length; i++) {
      total += this.carts[i].price;
    }
    return total;
    alert('Total: ' + total);
    this.totalCart.emit();
  }
}
