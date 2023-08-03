import { Component, Input } from '@angular/core';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-cat-fact-card',
  templateUrl: './cat-fact-card.component.html',
  styleUrls: ['./cat-fact-card.component.scss']
})
export class CatFactCardComponent {

  @Input() catFacts! : Cat;
  time : number = Date.now();


}
