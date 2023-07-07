import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemDetailComponent } from './components/products/product-item-detail/product-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    ProductsComponent,
    CartComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
