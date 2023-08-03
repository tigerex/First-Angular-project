import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item.model';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
@Input() carts!: Item[];
// @Input() item!: Item[];
@Output() closeDialog = new EventEmitter();

constructor(public cartService: CartService) { }

  close() {
    this.closeDialog.emit();
  }

  total() {
    let total = 0;
    for (let i = 0; i < this.carts.length; i++) {
      let temp = this.carts[i].price * this.carts[i].quantity_inCart;
      total += temp;
    }
    return total;
  }

  deleteItem(item: Item){
    this.cartService.deleteItem(item);
    this.carts = this.cartService.getItems();
  }
}
