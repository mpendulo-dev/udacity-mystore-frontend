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
}
