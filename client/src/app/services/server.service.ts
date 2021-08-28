import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private rootUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  logInUser(email: string, password: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify({email, password}));
    return this.http.post(this.rootUrl+'/auth/login',
    JSON.stringify({email, password}),
    {headers: headers});
  }

  registerUser(email: string, name: string, password: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    // console.log(JSON.stringify({data}));
    return this.http.post(this.rootUrl+'/auth/register',JSON.stringify({email, name, password}),
    {headers: headers});
  }

  createAdvertisement(data:any) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
       'Authorization': `Bearer `+token,
    })
    console.log(JSON.stringify({data}));
    return this.http.post(this.rootUrl+'/api/create',
      JSON.stringify({data}),
      {headers: headers});
  }

  getAdvertisementDetails(id:any) {
    const headers = new HttpHeaders({
        'Content-Type':'application/json',
    })
    return this.http.get(this.rootUrl+'/api/adv/'+id,
    {headers: headers});
  }

  updateAdvertisement(data:any) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer `+token,
    })
    // console.log(JSON.stringify({ename, category, evenue, fevenue, imagePath, date, orgname, description}));
    return this.http.put(this.rootUrl+'/api/updateevent/'+data.id,
        JSON.stringify({data}),
        {headers: headers});
  }

}
