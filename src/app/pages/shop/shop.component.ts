
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyAppService } from 'src/app/service/my-app.service';
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any = [];
  category: any = [];
  myParams: any = {};
  searchProduct: any = {};
  url: string = 'assets/data.json';
  sortType: string = 'Sort by';
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private app: MyAppService
  ) {
    route.navigate(['/shop']);
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      let urlCat: string = params.has('categoryId')
        ? `categoryId=${params.get('categoryId')}&`
        : '';

      let urlSort: string = params.has('_sort')
        ? `_sort=${params.get('_sort')}&_order=${params.get('_order')}&`
        : '';

      this.url = urlCat + urlSort;
    });

    // owlcarowsel thay đổi btn slidering
    $(document).ready(function () {
      // parralax
      $('.parallax-window').parallax({ imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg' });

    })

    this.app.getData().subscribe((res: any) => {
      this.category = res.category;
      this.products = res.products;
    })


    
  }

  async showProductByCat(id: number) {
    this.myParams.categoryId = id;

    await this.route.navigate(['/shop'], { queryParams: this.myParams });

    this.app.getData().subscribe((res: any) => {
      this.products = this.app.getProductByCatId(id, res.products);
    })
  }

  async showProductSort(sort: string, order: string, text: string) {
    this.myParams._sort = sort;
    this.myParams._order = order;
    this.sortType = text;

    await this.route.navigate(['/shop'], { queryParams: this.myParams });

    this.products = this.app.getProductBySort(sort, order, this.products);
  }

  async showProductSearch() {
    let name = this.searchForm.value.name;

    await this.route.navigate(['/shop'], { queryParams: { q: name } });

    this.app.getData().subscribe((res: any) => {
      this.products = this.app.getProductByName(name, res.products);
    })

    this.searchForm.reset();
  }

  resetShop() {
    this.myParams = {};
    this.sortType = 'Sort by';

    this.route.navigate(['/shop']);

    this.app.getData().subscribe((res: any) => {
      this.products = res.products;
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
