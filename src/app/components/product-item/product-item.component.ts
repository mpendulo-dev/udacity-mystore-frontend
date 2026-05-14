import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product?: Product;
  quantity: number = 1;
  quantityOptions = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe((product) => {
        this.product = product;
      });
    }
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
    this.cartService.updateQuantity(id, this.quantity);
  }
}
