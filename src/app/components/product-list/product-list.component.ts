import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  quantity: number = 1;

  constructor(
    private productService: ProductsService,

    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addItemToCart(product: Product) {
    const cartItem = {
      product: product.url,
      name: product.name,
      price: product.price,
      quantity: this.quantity,
      id: product.id,
      url: product.url,
    };
    this.cartService.addToCart(cartItem);
  }

  updateQuantity(event: { id: number; quantity: number }): void {
    this.quantity = event.quantity;
    this.cartService.updateQuantity(event.id, this.quantity);
  }
}
