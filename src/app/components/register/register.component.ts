
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MyAppService } from 'src/app/service/my-app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signF: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  json: any = '';

  constructor(private app: MyAppService
  ) { }

  get f() {
    return this.signF.controls;
  }
  ngOnInit(): void {

  }


  onSubmit() {
    let check = this.app.saveAccount(this.signF.value);
    if (check) {
      alert("Success");
      this.signF.reset();
    } else {
      alert('Email already exists')
    }
  }
}
