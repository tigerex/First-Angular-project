import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  title = 'A Store Sells Random Stuff';

  listItem: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("Hello World");
  }
}
