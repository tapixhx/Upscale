import { Component, OnInit, ViewChild } from '@angular/core';

import { ServerService } from '../services/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    private route : ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.serverservice.getAdvertisementDetails(this.id)
    .subscribe(
      (response) =>{
        console.log(response);
        this.res=response;
        this.editform.setValue({
          title : this.res.title,
          imagePath : this.res.image,
          category : this.res.category,
          content : this.res.content,
          publish : JSON.stringify(this.res.publish),
        })
      },
      (error) =>{
         console.log(error);
      },
    );
  }

  onUpdate(form : NgForm) {
    const value = form.value;
    value.id = this.id;
    this.serverservice.updateAdvertisement(value.id, value.title, value.imagePath, value.category, value.content, value.publish)
    .subscribe(
      (response) => { 
        // console.log(response);
        this.router.navigate(['/userprofile']);
      },
      (error) => {
        // console.log(error);
        alert("Error occured!")
      },
    );
  }

  onCancel() {
    this.router.navigate(['/userprofile']);
  }

}
