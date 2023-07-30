import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BCardsComponent } from 'src/app/components/b-cards/b-cards.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { XyzComponent } from 'src/app/components/xyz/xyz.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';



@NgModule({
  declarations: [    
    XyzComponent,
    FormComponent,
    BCardsComponent,
    CartComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    XyzComponent,
    FormComponent,
    BCardsComponent,
    CartComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
