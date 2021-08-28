import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router,) { }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.route.navigate(['/']);
  }
  
}
