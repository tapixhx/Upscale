import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private rootUrl = "http://localhost:3000";

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

  createAdvertisement(title: string, image: string, category: string, content: string, publish: boolean) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer `+token,
    })
    console.log(JSON.stringify({title, image, category, content, publish}));
    return this.http.post(this.rootUrl+'/api/advertisements',
      JSON.stringify({title, image, category, content, publish}),
      {headers: headers});
  }

  getAdvertisements() {
    return this.http.get(this.rootUrl+'/api/advertisements');
  }

  getAdvertisementDetails(id:any) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    console.log(this.rootUrl+'/api/advertisements/'+id);
    return this.http.get(this.rootUrl+'/api/advertisements/'+id,
    {headers: headers});
  }

  getAdvertisementComments(id:any) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.get(this.rootUrl+'/api/advertisements/'+id+'/comments',
    {headers: headers});
  }

  addComment(content: string, id: number) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer `+token,
    })
    console.log(JSON.stringify({content}));
    return this.http.post(this.rootUrl+'/api/advertisements/'+id+'/comments',
      JSON.stringify({content}),
      {headers: headers});
  }

  getUserAdv() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer `+token,
    })
    return this.http.get(this.rootUrl+'/api/useradv', { headers: headers });
  }

  updateAdvertisement(id:number, title:string, image:string, category:string, content:string, publish:boolean) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer `+token,
    })
    // console.log(JSON.stringify({ename, category, evenue, fevenue, imagePath, date, orgname, description}));
    return this.http.put(this.rootUrl+'/api/advertisements/'+id,
        JSON.stringify({title, image, category, content, publish}),
        {headers: headers});
  }

  deleteEvent(id:any) {
    // console.log(id);
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+token,
    })
    return this.http.delete(this.rootUrl+'/api/advertisements/'+id, { headers: headers });
  }

}
