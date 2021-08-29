import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServerService } from '../services/server.service';
import { Advertisement } from '../explore/advertisement.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Comment } from './comment.model';
import { AuthService } from '../services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {
  public advertisement : Advertisement;
  id:number;
  res:any;
  myUrl:any;
  advid:any;
  show = false;
  comment: Comment[];

  constructor(private route:ActivatedRoute,
    private serverservice:ServerService,
    public authservice: AuthService,
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.advid = this.route.snapshot.params.id;
    this.ngxService.start();
    this.serverservice.getAdvertisementDetails(this.advid)
    .subscribe(
      (response) => {
        this.res=response;
        // console.log(this.res);
        this.advertisement = this.res;
        this.show = true;
        // this.discover.imagePath = this.myUrl+"/"+this.discover.imagePath.slice(7);
      },
      (error: HttpErrorResponse) => {
        this.ngxService.stop();
        // console.log(error);
        alert("Error occured!");
      },
    );

    this.serverservice.getAdvertisementComments(this.advid)
    .subscribe(
      (response) => {
        this.res=response;
        // console.log(this.res);
        this.comment = this.res;
        // console.log(this.comment);
        this.ngxService.stop();
        // this.discover.imagePath = this.myUrl+"/"+this.discover.imagePath.slice(7);
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
        alert('Error in fetching comments');
        this.ngxService.stop();
      },
    );
  }

}
