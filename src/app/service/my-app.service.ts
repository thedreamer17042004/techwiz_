import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/data.json');
  }

  getProductByCatId(CatId: number, data: any) {
    return data.filter((item: any) => {
      return item.categoryId == CatId;
    })
  }

  getProductById(id: number, data: any) {
    return data.find((item: any) => {
      return item.id == id;
    })
  }

  getProductByName(name: any, data: any) {
    return data.filter((item: any) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    })
  }

  getProductBySort(sort: any, order: any, data: any) {
    if (sort == 'saleprice') {
      return data.sort((item1: any, item2: any) => {
        if (order == 'asc') {
          return item1.saleprice < item2.saleprice ? -1 : 0;
        } else {
          return item1.saleprice > item2.saleprice ? -1 : 0;
        }
      })
    }

    if (sort == 'name') {
      return data.sort((item1: any, item2: any) => {
        if (order == 'asc') {
          return item1.name < item2.name ? -1 : 0;
        } else {
          return item1.name > item2.name ? -1 : 0;
        }
      })
    }
  }

  getAccounts() {
    let cartJson: any = localStorage.getItem('account');
    let accounts: any = []
    if (cartJson) {
      accounts = JSON.parse(cartJson);
    }
    return accounts;
  }

  checkAccountExists(email: string, data: any) {
    return data.find((item: any) => {
      return item.email == email;
    })
  }

  saveAccount(account: any) {
    let accounts = this.getAccounts();
    let acc = this.checkAccountExists(account.email, accounts);
    if (acc) {
      return false;
    }

    accounts.push(account);
    let cartJson = JSON.stringify(accounts);
    localStorage.setItem('account', cartJson);
    return true;
  }

  checkLogin(account: any, data: any) {
    return data.find((item: any) => {
      return item.email == account.email && item.password == account.password;
    })
  }

  getCart() {
    let cartJson: any = localStorage.getItem('cart');
    let cart: any = []
    if (cartJson) {
      cart = JSON.parse(cartJson);
    }
    return cart;
  }

  checkPrdExists(id: any, data: any) {
    return data.find((item: any) => {
      return item.id == id;
    })
  }

  savePrd(prd: any) {
    let cart = this.getCart();
    let prdCart = this.checkPrdExists(prd.id, cart);
    if (prdCart) {
      let index = cart.findIndex((item: any) => {
        return item.id == prdCart.id;
      });

      cart[index].amount += 1;
    } else {
      cart.push(prd);
    }

    let cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
    return true;
  }
}
