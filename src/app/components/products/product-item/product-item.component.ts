import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from "../../../services/cart.service";
import { Product } from "../../../models/product";
import { OrderItem } from "../../../models/cart";

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
  @Output() addedProduct: EventEmitter<OrderItem> = new EventEmitter();

  qty: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public addToCart(): void {
    // this.cartService.add(this.product, this.qty);
    const orderItem = new OrderItem();
    orderItem.id = this.product.id;
    orderItem.name = this.product.name;
    orderItem.price = this.product.price;
    orderItem.url = this.product.url;
    orderItem.description = this.product.description;
    orderItem.quantity = +this.qty;

    this.addedProduct.emit(orderItem);
    alert('Add to cart successfully !!!');
  }
}
