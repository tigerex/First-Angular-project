import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-b-cards',
  templateUrl: './b-cards.component.html',
  styleUrls: ['./b-cards.component.scss']
})
export class BCardsComponent implements OnInit{
  @Input()
  item!: Item
  itemInCart: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  addToCart(product: Item) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
