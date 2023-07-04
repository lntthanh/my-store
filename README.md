# MyStore
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Setup Project
### 1. Run `npm install` to install package dependencies
### 2. Development server

    Run `ng serve` for a dev server. 
    Navigate to `http://localhost:4200/`. 
    The application will automatically reload if you change any of the source files.

## Project Information
### 1. Routing
```ts
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
```
### 2. Components
- ProductsComponent (`app/products`): display the list of products
- ProductItemDetailComponent (`app/products/product-item-detail`): display the detail of a product
- CartComponent (`app/cart`): display the current cart information & checkout
- ConfirmationComponent (`app/confirmation`): confirm successful checkout
- ProductItemComponent (`app/products/product-item`): display a product item information in the product list

### 3. Models
- Product Model includes id, name, price, url (image url) and description.

  ```tsx
  export class Product {
    id: number = 0;
    name: string = "";
    price: number = 0;
    url: string = "";
    description: string = "";
  }
  ```

- OrderItem Model includes id, name, price, url (image url), description and quantity.

  ```tsx
  export class OrderItem {
    id: number = 0;
    name: string = "";
    price: number = 0;
    url: string = "";
    description: string = "";
    quantity: number = 1;
  }
  ```

- Cart Model includes order items, customer name, customer address, customer credit cart number, total amount of order and order status.

  ```tsx
  export class Cart {
    items: OrderItem[] = [];
    name: string = "";
    address: string = "";
    cardNumber: string = "";
    totalAmount: number = 0;
    isConfirmed: boolean = false;
  }
  ```

### 4. Services
- `ProductsService`: get product information.
  - `getAll()`: return a list of product.
- `CartService`: manage a cart information.
  - `getCart()`: return the current cart information.
  - `update(cart: Cart)`: update the new cart information
  - `add(product: Product, quantity: number)`: add the product into the cart with quantity
  - `checkout(name: string, address: string, cardNumber: string)`: check out the cart with customer information: name, address, cardNumber
  - `clearCart()`: clear all item in the cart
  - `checkout()`: submit cart

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
