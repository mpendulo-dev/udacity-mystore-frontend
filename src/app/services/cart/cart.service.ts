import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor() {}

  addToCart(item: CartItem): void {
    //Spread Operator(...) -  copy all or part of an existing array or object into another array or object.
    const items = [...this.cart.value.items];

    //Check if item is already in the cart. and if true update quantity
    const ItemsInCart = items.find((_item) => _item.id === item.id);
    if (ItemsInCart) {
      ItemsInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    alert('Item added to cart');
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  clearCart(): void {
    this.cart.next({ items: [] });
    alert('Cart is cleared');
  }
}
