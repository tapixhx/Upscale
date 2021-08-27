import { Component, OnInit } from '@angular/core';

import { ServerService } from '../services/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:any;

  constructor(private serverservice : ServerService,
    private router : Router,
    private route : ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.serverservice.getAdvertisementDetails(this.id)
    .subscribe(
      (response) =>{
        console.log(response);
      },
      (error) =>{
         console.log(error);
      },
    );
  }

  onUpdate(form : NgForm) {
    const value = form.value;
    value.id = this.id;
    this.serverservice.updateAdvertisement(value)
    .subscribe(
      (response) => { 
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  onCancel() {
    this.router.navigate(['/userprofile']);
  }

}
