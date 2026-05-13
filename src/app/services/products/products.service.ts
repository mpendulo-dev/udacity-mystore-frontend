import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly PRODUCTS_URL = 'http://localhost:4200/assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_URL);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return new Observable((observer) => {
      this.getProducts().subscribe((products) => {
        const product = products.find((p) => p.id === id);
        observer.next(product);
        observer.complete();
      });
    });
  }
}
