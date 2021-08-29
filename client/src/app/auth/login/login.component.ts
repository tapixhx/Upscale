import { Component, OnInit } from '@angular/core';

import { ServerService } from 'src/app/services/server.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res:any;

  constructor(private serverservice : ServerService,
    private route: Router,
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
  }

  onLogin(form : NgForm) {
    this.ngxService.start();
    // console.log(JSON.stringify(form.value));
    const value = form.value;
    this.serverservice.logInUser(value.email, value.password)
    .subscribe(
      (response) => {
        console.log(response);
        this.res = response;
        localStorage.setItem('token', this.res.token);
        localStorage.setItem('name',this.res.user.name);
        this.ngxService.stop();
        alert("Successfully logged in!");
        this.route.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.ngxService.stop();
        alert("Error occured!");
      }
    );
  }

}
