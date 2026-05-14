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
  quantityOptions = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  quantity: number = 1;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
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

  updateQuantity(id: number, event: Event): void {
    this.quantity = +(event.target as HTMLSelectElement).value;
    // const quantity = +(event.target as HTMLSelectElement).value;

    this.cartService.updateQuantity(id, this.quantity);
  }
}
