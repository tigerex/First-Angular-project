import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-b-cards',
  templateUrl: './b-cards.component.html',
  styleUrls: ['./b-cards.component.scss']
})
export class BCardsComponent {
  @Input()
  item!: Item
  itemInCart: Item[] = [];

  @Output() onCart = new EventEmitter();

  activated() {
    this.onCart.emit();
    console.log('Your product has been added to the cart!');
    console.log(this.item);
  }

  constructor(
    private cartService: CartService
  ) {}


  addToCart() {
    // this.onCart.emit();
    // this.cartService.addToCart(product);
    // window.alert('Your product has been added to the cart!');
  }
}
