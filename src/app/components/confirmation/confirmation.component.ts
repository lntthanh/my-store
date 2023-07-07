import { Component, OnInit } from '@angular/core';
import { Cart } from "../../models/cart";
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  cart: Cart = new Cart();

  async ngOnInit(): Promise<void> {
    this.cart = this.cartService.getCart();

    if (this.cart.isConfirmed) {
      this.cartService.clear();
    } else {
      await this.router.navigate(['cart']);
    }
  }
}
