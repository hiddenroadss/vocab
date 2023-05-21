import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000';
  constructor(private router: Router, private http: HttpClient) {}

  signIn(user: User) {
    return this.http.post(`${this.BASE_URL}/authentication/sign-in`, user);
  }

  signUp(user: User) {
    return this.http.post(`${this.BASE_URL}/authentication/sign-up`, user);
  }

  signOut() {
    return this.http.post(`${this.BASE_URL}/authentication/sign-out`, {});
  }
}
