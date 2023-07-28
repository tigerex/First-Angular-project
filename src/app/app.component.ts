import { Component, ElementRef, ViewChild} from '@angular/core';
import { Item } from './models/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  constructor(private cartService: CartService) {}
  
  title = 'AStoreSellsRandomStuff';
  @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined;  
  carts: Item[] = [];

  ngOnInit() {
    this.carts = this.cartService.getItems();
  }

  totalCart: any = 0;

  listItems: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      price:  9999,
      quantity_inStock: 10,
      quantity_inCart: 1,
      description: 'This is item 1',
      url: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 2,
      name: 'Item 2',
      price:  99,
      quantity_inStock: 100,
      quantity_inCart: 1,
      description: 'This is item 2',
      url: 'https://picsum.photos/200/300?random=1',

    },
    {
      id: 3,
      name: 'Item 3',
      price:  200,
      quantity_inCart: 1,
      quantity_inStock: 18,
      description: 'This is item 3',
      url: 'https://picsum.photos/200/300?random=3',
    },
    {
      id: 4,
      name: 'Item 4',
      price:  12,
      quantity_inCart: 1,
      quantity_inStock: 234,
      description: 'This is item 4',
      url: 'https://picsum.photos/200/300?random=4',
    },
    {
      id: 5,
      name: 'Item 5',
      price:  765,
      quantity_inCart: 1,
      quantity_inStock: 99,
      description: 'This is item 5',
      url: 'https://picsum.photos/200/300?random=5',
    },
  ]

  addItem(item: any) {
    item.id = this.listItems.length + 1;
    alert(item.name);
    this.listItems.push(item);
  }

  addCart(item: any) {
    this.cartService.addItem(item);
  }

  total() {
    this.cartService.total();
  }
  
  showDialog() {
    this.dialog?.nativeElement.showModal();
  }

  close() {
    this.dialog?.nativeElement.close();
  }

}

