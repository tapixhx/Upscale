import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errormsg:string;
  publish:boolean = false;

  constructor(private router : Router,
              private serverservice : ServerService,
              private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
  }

  alsoPublish() {
    this.publish = true;
  }

  noPublish() {
    this.publish = false;
  }

  onCreate(form : NgForm) {
    this.ngxService.start();
    const value = form.value;
    value.publish = this.publish;
    console.log(JSON.stringify({value}));
    this.serverservice.createAdvertisement(value.title, value.imagePath, value.category, value.content, value.publish)
      .subscribe(
        (response) =>{ 
          // console.log(response);
          this.ngxService.stop();
          this.router.navigate(['/explore']);
        },
        (error:HttpErrorResponse) =>{ 
          // console.log(error);
          this.ngxService.stop();
          alert("Error ocuured");
        },
      );
  }

  onCancel() {
    this.router.navigate(['/explore']);
  }

}
