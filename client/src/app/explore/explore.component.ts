import { Component, OnInit } from '@angular/core';

import { Advertisement } from './advertisement.model';
import { ServerService } from '../services/server.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  ecomm = false;
  crypto = false;
  games = false;
  event = false;
  id:any;
  res: any;
  advertisement: Advertisement[];
  advarray:number[]=[];
  i:number;
  j:number;

  needEcomm(id:any) {
    this.id = id;
    this.ecomm = true;
    this.crypto = false;
    this.games = false;
    this.event = false;
  }
  needCrypto(id:any) {
    this.id = id;
    this.ecomm = false;
    this.crypto = true;
    this.games = false;
    this.event = false;
  }
  needGames(id:any) {
    this.id = id;
    this.ecomm = false;
    this.crypto = false;
    this.games = true;
    this.event = false;
  }
  needEvent(id:any) {
    this.id = id;
    this.ecomm = false;
    this.crypto = false;
    this.games = false;
    this.event = true;
  }

  constructor(private serverservice: ServerService,
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.serverservice.getAdvertisements()
    .subscribe(
      (response) =>{
        this.res = response;
        // console.log(this.res);
        this.advertisement = this.res;
        for(this.i=0; this.i<this.advertisement.length; this.i++) {
          this.id = this.advertisement[this.i].id;
          // console.log(this.advertisement[this.i].image);
          for(this.j=this.i; this.j<this.i+1; this.j++) {
            this.advarray.push(this.id);
            // console.log(this.advarray)
          }
        }
        this.ngxService.stop();
      },
      (error) =>{
        this.ngxService.stop();
        //  console.log(error);
        alert("Error occured!");
      },
    );
  }

}
