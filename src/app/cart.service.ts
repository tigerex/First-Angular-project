import { Injectable } from '@angular/core';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Item[] = [];

  constructor() {}

  saveLocal(){
    localStorage.setItem('listItem', JSON.stringify(this.listItem));
  }

  loadLocal(){
    let list = localStorage.getItem('listItem');
    if(list){
      return JSON.parse(list);
    }else{
      return [];
    }
  }

  listItem = this.loadLocal();



  addItem(item: Item) {
    let index = this.items.findIndex((card) => card.id === item.id);
    if (index !== -1) {
      if(this.items[index].quantity_inStock <= 0){ 
        alert("No more for you!!");
      } else {
        this.items[index].quantity_inCart += 1;
        this.items[index].quantity_inStock -= 1;
      }
    } else {
      item.quantity_inCart = 1;
      item.quantity_inStock -= 1;
      this.items.push(item);
    }
  }

  reduceItem(item: Item) {
    let index = this.items.findIndex((card) => card.id === item.id);
    if (index !== -1) {
      if(this.items[index].quantity_inCart === 1){
        this.items[index].quantity_inCart -= 1;
        this.items[index].quantity_inStock += 1;
        this.deleteItem(item);
      } else {
        this.items[index].quantity_inCart -= 1;
        this.items[index].quantity_inStock += 1;
      }
    }
  }

  deleteItem(item: Item) {
    for(let i = 0; i<this.items.length; i++){
      if(this.items[i].id === item.id){
        this.items.splice(i,1);
        alert("Item Deleted From Cart");
        this.items[i].quantity_inStock += this.items[i].quantity_inCart;
      }
    }
    console.log(item);
    
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
