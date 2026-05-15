import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<Cart>;
  quantityOptions = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router,
  ) {
    this.cart$ = this.cartService.cart.asObservable();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(items: any[]): number {
    return this.cartService.getTotal(items);
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number): void {
    this.cartService.updateQuantity(id, quantity);
  }

  onSubmit(): void {
    const total = this.getTotal(this.cartItems);
    // console.log(`Total is ${total} and full name is ${this.fullName}`);

    this.checkoutService.setCheckoutData(this.fullName, total);

    this.router.navigate(['/checkout']);
  }
}
