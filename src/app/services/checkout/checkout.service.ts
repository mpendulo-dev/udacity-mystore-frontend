import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  fullName: string = '';
  total: number = 0;

  constructor() {}

  setCheckoutData(name: string, total: number) {
    this.fullName = name;
    this.total = total;
  }

  getCheckoutData() {
    return {
      fullName: this.fullName,
      total: this.total,
    };
  }
}
