export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  url: string;
  id: number;
}
