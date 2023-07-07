import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Product } from "../../models/product";
import {CartService} from "../../services/cart.service";
import {OrderItem} from "../../models/cart";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private cartService: CartService,
  private productService: ProductsService
  ) {
  }

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: Product[]) => {
      this.products = res
    })
  }

  public addedProduct(orderItem: OrderItem): void {
    const product = new Product();
    product.id = orderItem.id;
    product.name = orderItem.name;
    product.price = orderItem.price;
    product.url = orderItem.url;
    product.description = orderItem.description
    console.log('order item', orderItem);
    this.cartService.add(product, +orderItem.quantity);
  }

}
