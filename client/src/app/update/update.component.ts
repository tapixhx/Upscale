import { Component, OnInit, ViewChild } from '@angular/core';

import { ServerService } from '../services/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @ViewChild('f', { static:false }) editform : NgForm
  id:any;
  res:any;

  constructor(private serverservice : ServerService,
    private router : Router,
    private route : ActivatedRoute,
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.ngxService.start();
    this.serverservice.getAdvertisementDetails(this.id)
    .subscribe(
      (response) =>{
        // console.log(response);
        this.res=response;
        this.editform.setValue({
          title : this.res.title,
          imagePath : this.res.image,
          category : this.res.category,
          content : this.res.content,
          publish : JSON.stringify(this.res.publish),
        })
        this.ngxService.stop();
      },
      (error) =>{
        this.ngxService.stop();
        // console.log(error);
        alert("Error occured!");
      },
    );
  }

  onUpdate(form : NgForm) {
    this.ngxService.start();
    const value = form.value;
    value.id = this.id;
    this.serverservice.updateAdvertisement(value.id, value.title, value.imagePath, value.category, value.content, value.publish)
    .subscribe(
      (response) => { 
        // console.log(response);
        this.ngxService.stop();
        this.router.navigate(['/userprofile']);
      },
      (error) => {
        this.ngxService.stop();
        // console.log(error);
        alert("Error occured!")
      },
    );
  }

  onCancel() {
    this.router.navigate(['/userprofile']);
  }

}
