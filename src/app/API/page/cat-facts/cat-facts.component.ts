import { Component, Input } from '@angular/core';
import { APIServiceService } from '../../service/apiservice.service';
import { Cat } from '../../models/cat.model';


@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent {
  listFacts: Cat[] = [];

  constructor(private catSV : APIServiceService) {
    this.getCatFact();
  }
  
  async getCatFact(){
    this.listFacts = await this.catSV.getCat(140,20);
  }
}