import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MdbCarouselModule
  ]
})
export class LandingModule { }
