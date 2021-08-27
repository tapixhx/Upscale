import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
