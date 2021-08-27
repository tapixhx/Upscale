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

  createAdvertisement(data:any) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
       'Authorization': `Bearer `+token,
    })
    console.log(JSON.stringify({data}));
    return this.http.post(this.rootUrl+'/api/register',
      JSON.stringify({data}),
      {headers: headers});
  }

}
