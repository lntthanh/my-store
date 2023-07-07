import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./components/products/products.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductItemDetailComponent } from "./components/products/product-item-detail/product-item-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductItemDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
