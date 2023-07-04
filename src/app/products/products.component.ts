import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";
import { Product } from "./product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService: ProductsService
  ) {
  }

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: Product[]) => {
      this.products = res
    })
  }

}
