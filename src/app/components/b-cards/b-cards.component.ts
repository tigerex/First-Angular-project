import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-b-cards',
  templateUrl: './b-cards.component.html',
  styleUrls: ['./b-cards.component.scss']
})
export class BCardsComponent {
  @Input() item!: Item;
  itemInCart: Item[] = [];

  @Output() onCart = new EventEmitter();
  @Output() onDetail = new EventEmitter();

  activated() {
    this.onCart.emit();
    // DataService.addItem(this.item);
    console.log('Your product has been added to the cart!');
    console.log(this.item);
  }

  constructor(private dataService: DataService) {}

  delete(){
    this.dataService.deleteItemWithID(this.item.id);
  }
  
  do() {
    this.onDetail.emit(this.item);
    console.log("Iten "+this.item.name+" has been checked!");
  }
}
