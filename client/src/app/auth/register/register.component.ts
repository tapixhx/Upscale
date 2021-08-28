import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerService } from 'src/app/services/server.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  res:any;

  constructor(private serverservice: ServerService,
    private route: Router,) { }

  ngOnInit(): void {
  }

  onRegister(form : NgForm) {
    console.log(JSON.stringify(form.value));
    const value = form.value;
    if(value.password == value.confirmPassword) {
      this.serverservice.registerUser(value.email, value.name, value.password)
      .subscribe(
        (response) => {
          console.log(response);
          this.res = response;
          localStorage.setItem('token', this.res.token);
          localStorage.setItem('name',this.res.user.name);
          alert("Account created succesfully!");
          this.route.navigate(['/']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          alert("Error occured!");
        },
      );
    }
    else {
      alert("Password and confirm does not match!");
    }
  }

}
