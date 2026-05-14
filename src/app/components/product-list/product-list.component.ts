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

  constructor(
    private productService: ProductsService,
    private router: Router,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      console.log('products', products);
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
      quantity: 1,
      id: product.id,
      url: product.url,
    };
    this.cartService.addToCart(cartItem);
  }
}
