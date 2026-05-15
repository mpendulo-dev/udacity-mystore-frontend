import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  total: number = 0;

  constructor(
    private checkoutService: CheckoutService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const data = this.checkoutService.getCheckoutData();
    this.fullName = data.fullName;
    this.total = data.total;
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
