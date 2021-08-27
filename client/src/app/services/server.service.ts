import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private rootUrl = "https://localhost:3000";

  constructor(private http: HttpClient) { }

  logInUser(data:any) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify({data}));
    return this.http.post(this.rootUrl+'/auth/login',
    JSON.stringify({data}),
    {headers: headers});
  }

  registerUser(data:any) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    // console.log(JSON.stringify({data}));
    return this.http.post(this.rootUrl+'/auth/register',JSON.stringify({data}),
    {headers: headers});
  }

}
