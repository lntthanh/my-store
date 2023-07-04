import { Component, Input } from '@angular/core';
import { CartService } from "../../cart/cart.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  constructor(
    private cartService: CartService
  ) {
  }

  @Input() product: Product = new Product();

  qty: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public addToCart(): void {
    this.cartService.add(this.product, this.qty);
    alert('Add to cart successfully !!!');
  }
}
