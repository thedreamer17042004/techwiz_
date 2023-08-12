
import { Component, OnInit } from '@angular/core';
import { MyAppService } from 'src/app/service/my-app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = [];
  pro: any = []

  constructor(private app: MyAppService) { }

  ngOnInit(): void {

    this.app.getData().subscribe((res: any) => {
      this.products = res.products
      for (let i = 0; i < 3; i++) {
        this.pro.push(this.products[i]);

      }
    })

  }

  addToCart(id: any) {
    let prd = this.app.getProductById(id, this.products);
    let check = this.app.savePrd(prd);
    if (check) {
      alert("Success");
    }
  }
}
