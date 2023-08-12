import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyAppService } from 'src/app/service/my-app.service';

declare var $: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dataDetail: any = {};
  products: any = [];



  constructor(
    private product: MyAppService,
    private route: ActivatedRoute,
    private app: MyAppService
  ) { }

  ngOnInit(): void {
    // owlcarowsel thay đổi btn slidering
    $(document).ready(function () {

      // parralax
      $('.parallax-window').parallax({ imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg' });

    })

    this.product.getData().subscribe((res: any) => {
      this.products = res.products
      this.route.paramMap.subscribe(params => {
        let id: any = params.get('id');
        this.dataDetail = this.product.getProductById(id, this.products);
      });
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
