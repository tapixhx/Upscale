import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serverservice: ServerService,) { }

  ngOnInit(): void {
  }

  onRegister(form : NgForm) {
    console.log(JSON.stringify(form.value));
    const value = form.value;
    if(value.password == value.confirmPassword) {
      this.serverservice.registerUser(value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        },
      );
    }
    else {
      alert("Password and confirm does not match!");
    }
  }

}
