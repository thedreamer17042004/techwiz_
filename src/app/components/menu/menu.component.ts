import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  AccLoginJson: any = localStorage.getItem('isLogin');
  AccLogin: any = JSON.parse(this.AccLoginJson);
  check: boolean = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
    if (localStorage.getItem('isLogin')) {
      this.check = true;
    }
  }

  logOut() {
    localStorage.removeItem('isLogin');
    this.router.navigate(['/login'])
  }
}
