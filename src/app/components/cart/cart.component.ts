import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<Cart>;
  quantityOptions = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart.asObservable();
  }

  ngOnInit(): void {}
  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(items: any[]): number {
    return this.cartService.getTotal(items);
  }

  updateQuantity(id: number, quantity: number): void {
    this.cartService.updateQuantity(id, quantity);
  }
}
