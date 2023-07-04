import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cart, OrderItem } from "./cart";
import { Router } from "@angular/router";
import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cartService: CartService
  ) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    });
  }

  form: FormGroup = new FormGroup({});
  myCart: Cart = new Cart();

  customerName: string = '';
  customerAddress: string = '';
  creditCardNumber: string = '';

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.myCart = this.cartService.getCart();
  }

  onChange(id: number, qty: number): void {
    this.myCart.items = this.myCart.items.filter((item: OrderItem) => item.quantity > 0);

    if (qty == 0) {
      alert('Removed the product');
    }

    this.cartService.update(this.myCart);
  }

  async onSubmit(): Promise<void> {
    this.cartService.checkout(
      this.customerName,
      this.customerAddress,
      this.creditCardNumber
    );
    await this.router.navigate(['confirmation']);
  }
}
