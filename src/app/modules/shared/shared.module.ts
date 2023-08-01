import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FirebaseAppModule } from '@angular/fire/app';

import { BCardsComponent } from 'src/app/components/b-cards/b-cards.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { XyzComponent } from 'src/app/components/xyz/xyz.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { TextCarouselComponent } from 'src/app/components/text-carousel/text-carousel.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [    
    XyzComponent,
    FormComponent,
    BCardsComponent,
    CartComponent,
    NavbarComponent,
    TextCarouselComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

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
    TextCarouselComponent,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SharedModule { }
