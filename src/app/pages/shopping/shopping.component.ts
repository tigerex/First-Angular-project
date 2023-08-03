import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  listItems: Item[];
  itemG : Item =<Item>{};
  constructor(
    private cartService: CartService,
    public dataService: DataService
    ) {
      this.listItems = this.dataService.listItems;
    }
    
    @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined;  
    @ViewChild('detail') detailDialog: ElementRef<HTMLDialogElement> | undefined;
    @ViewChild('wow') outSideDialog: ElementRef<HTMLDialogElement> | undefined;

    carts: Item[] = [];
    item: Item[] = [];
    ngOnInit() {
      this.carts = this.cartService.getItems();
    }

  totalCart: any = 0;

  addItem(item: any) {
    item.id = this.listItems.length + 1;
    // alert(item.name);
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

  showDetailDialog(item: Item) {
    this.itemG = item;
    console.log(this.itemG);
    this.detailDialog?.nativeElement.showModal();
    console.log('showDetailDialog activated');
  }

  closeDetailDialog() {
    this.detailDialog?.nativeElement.close();
  }
}
