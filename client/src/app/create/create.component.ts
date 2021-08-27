import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errormsg:string;
  publish:boolean = false;

  constructor(private router : Router,
              private serverservice : ServerService,) { }

  ngOnInit(): void {
  }

  alsoPublish() {
    this.publish = true;
  }

  onCreate(form : NgForm) {
    const value = form.value;
    value.publish = this.publish;
    console.log(JSON.stringify({value}));
    this.serverservice.createAdvertisement(value)
      .subscribe(
        (response) =>{ 
          console.log(response);
          // this.router.navigate(['/explore']);
        },
        (error:HttpErrorResponse) =>{ 
          console.log(error);
          this.errormsg = error.error.message;
          if(this.errormsg === "Not authenticated.") {
            localStorage.removeItem('token');
            localStorage.removeItem('name');  
            this.router.navigate(['/']);
          }
          if(this.errormsg != 'Not authenticated.') {

          }
        },
      );
  }

  onCancel() {
    this.router.navigate(['/explore']);
  }

}
