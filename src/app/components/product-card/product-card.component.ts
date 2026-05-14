import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() quantityChange = new EventEmitter<{
    id: number;
    quantity: number;
  }>();

  quantityOptions = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  onQuantityChange(event: Event) {
    this.quantityChange.emit({
      id: this.product.id,
      quantity: +(event.target as HTMLSelectElement).value,
    });
  }
}
