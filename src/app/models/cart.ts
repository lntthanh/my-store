export class Cart {
  items: OrderItem[] = [];
  name: string = '';
  address: string = '';
  cardNumber: string = '';
  totalAmount: number = 0;
  isConfirmed: boolean = false;
}

export class OrderItem {
  id: number = 0;
  name: string = '';
  price: number = 0;
  url: string = '';
  description: string = '';
  quantity: number = 1;
}
