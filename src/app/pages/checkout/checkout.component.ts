import { Component, OnInit } from '@angular/core';
import { MyAppService } from 'src/app/service/my-app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: any = [];
  total: any = 0;

  constructor(
    private app: MyAppService
  ) {

  }

  ngOnInit(): void {
    this.cart = this.app.getCart();
    console.log(this.cart);

    this.total = 0;
    for (const item of this.cart) {
      this.total += (item.saleprice * item.amount);
    }
  }
}
