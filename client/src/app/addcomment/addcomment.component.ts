import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  id:any;

  constructor(private route:ActivatedRoute, 
    private router : Router,
    private serverservice : ServerService,
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  onComment(form : NgForm) {
    this.ngxService.start();
    const value = form.value;
    console.log(JSON.stringify({value}));
    this.serverservice.addComment(value.comment, this.id)
      .subscribe(
        (response) =>{ 
          // console.log(response);
          this.ngxService.stop();
          this.router.navigate(['/advertisement',this.id]);
        },
        (error:HttpErrorResponse) =>{ 
          // console.log(error);
          this.ngxService.stop();
          alert("Error ocuured");
        },
      );
  }

}
