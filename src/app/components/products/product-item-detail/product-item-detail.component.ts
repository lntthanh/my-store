import { Component, OnInit } from '@angular/core';
import { Product } from "../../../models/product";
import { ProductsService } from "../../../services/products.service";
import { ActivatedRoute, Params } from "@angular/router";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  product: Product = new Product();

  qty: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = parseInt(params['id']);
      this.productService.getAll().subscribe((res: Product[]) => {
        this.product = res.find((item: Product) => item.id == id) || new Product();
      });
    });
  }

  public addToCart(): void {
    this.cartService.add(this.product, this.qty);
    alert('Add to cart successfully !!!');
  }
}
