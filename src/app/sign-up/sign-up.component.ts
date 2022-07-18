import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  subscriptionTypes = ["Basic", "Advanced", "Pro"];
  defaultSubscription = "Advanced";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.form)
  }

  getValue(model: NgModel) {
    console.log(model)
  }

}
