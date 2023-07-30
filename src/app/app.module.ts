import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { XyzComponent } from './components/xyz/xyz.component';
// import { FormComponent } from './components/form/form.component';
// import { BCardsComponent } from './components/b-cards/b-cards.component';
// import { CartComponent } from './components/cart/cart.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    // XyzComponent,
    // FormComponent,
    // BCardsComponent,
    // CartComponent,
    // NavbarComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    
  ],
  exports: [

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
