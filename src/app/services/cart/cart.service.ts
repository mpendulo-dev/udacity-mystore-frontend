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
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += item.quantity;
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

  updateQuantity(id: number, quantity: number): void {
    const currentCart = this.cart.value;

    const updatedItems = currentCart.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }

      return item;
    });

    const updatedCart = {
      ...currentCart,
      items: updatedItems,
    };

    this.cart.next(updatedCart);
  }
}
