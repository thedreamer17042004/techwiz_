


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyAppService } from 'src/app/service/my-app.service';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private app: MyAppService,
    private route: Router
  ) { }

  get f() {
    return this.loginF.controls;
  }
  ngOnInit(): void {

  }

  onSubmit() {
    let accounts = this.app.getAccounts();
    let account = this.loginF.value;

    let acc = this.app.checkLogin(account, accounts);


    if (!acc) {
      alert('Wrong email or password');
    } else {
      alert('Success');
      let accJson = JSON.stringify(acc)
      localStorage.setItem('isLogin', accJson);
      this.route.navigate(['/']);
    }

  }

}
