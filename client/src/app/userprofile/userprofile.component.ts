import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ServerService } from '../services/server.service';
import { Advertisement } from '../explore/advertisement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  id:any;
  res: any;
  advertisement: Advertisement[];
  advarray:number[]=[];
  i:number;
  j:number;
  publish = false;

  constructor(private serverservice: ServerService,
    private router: Router) { }

  ngOnInit(): void {
    this.serverservice.getUserAdv()
    .subscribe(
      (response) => {
        this.res=response;
        // console.log(this.res);
        // this.discover.imagePath = this.myUrl+"/"+this.discover.imagePath.slice(7);
        this.advertisement = this.res;
        for(this.i=0; this.i<this.advertisement.length; this.i++) {
          this.id = this.advertisement[this.i].id;
          // console.log(this.advertisement[this.i].image);
          for(this.j=this.i; this.j<this.i+1; this.j++) {
            this.advarray.push(this.id);
            // console.log(this.advarray)
          }
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      },
    );
  }

  showPublish() {
    this.publish = true;
  }

  hidePublish() {
    this.publish = false;
  }

  onDelete(eventid:any) {
    // console.log(eventid);
    this.serverservice.deleteEvent(eventid)
    .subscribe(
      (response) =>{
        // console.log(response);
        this.router.navigate(['/explore']);
      },
      (error) =>{
        // console.log(error);
        alert("Error occured!");
      },
    )
  }

}
