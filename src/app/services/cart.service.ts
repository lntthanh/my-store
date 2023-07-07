import { Injectable } from "@angular/core";
import { Cart, OrderItem } from "../models/cart";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    const cart = localStorage.getItem('cart') || '{}';
    if (cart !== '{}') {
      this.cart = JSON.parse(cart);
    }
  }

  cart = new Cart();

  public saveLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public getTotalAmount(): number {
    let total = 0;
    this.cart.items.forEach((item: OrderItem) => total += item.price * item.quantity);
    this.cart.totalAmount = total;

    return total;
  }

  public getCart(): Cart {
    return this.cart;
  }

  public update(cart: Cart): void {
    this.cart = cart;
    this.getTotalAmount();
    this.saveLocalStorage();
  }

  public add(product: Product, qty: number): void {
    const prod = this.cart.items.find((item) => item.id === product.id);

    if (prod !== undefined) {
      prod.quantity = prod.quantity + +qty;
    } else {
      const orderItem = new OrderItem();
      orderItem.id = product.id;
      orderItem.name = product.name;
      orderItem.price = product.price;
      orderItem.description = product.description;
      orderItem.url = product.url;
      orderItem.quantity = +qty;

      this.cart.items.push(orderItem);
    }

    this.getTotalAmount();
    this.saveLocalStorage();
  }

  public checkout(name: string, address: string, cardNumber: string): Cart {
    this.cart.name = name;
    this.cart.address = address;
    this.cart.cardNumber = cardNumber;
    this.cart.isConfirmed = true;

    return this.cart;
  }

  public clear(): void {
    this.cart = new Cart();
    this.saveLocalStorage();
  }

}
