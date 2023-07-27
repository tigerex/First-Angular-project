import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  
  title = 'AStoreSellsRandomStuff';

  listItems: Item[] = [];

  constructor() { }

}
