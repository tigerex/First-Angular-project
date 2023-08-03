import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatFactsRoutingModule } from './cat-facts-routing.module';
import { CatFactsComponent } from './cat-facts.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CatFactCardComponent } from '../../components/cat-fact-card/cat-fact-card.component';



@NgModule({
  declarations: [
    CatFactsComponent,
    CatFactCardComponent,
  ],
  imports: [
    CommonModule,
    CatFactsRoutingModule,
    SharedModule,
  ]
})
export class CatFactsModule { }
