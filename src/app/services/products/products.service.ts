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
}
