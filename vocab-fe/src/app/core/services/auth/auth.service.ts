import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Tokens } from 'src/app/shared/models/tokens.model';

import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000';
  private readonly ACCESS_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string | null = null;
  constructor(private http: HttpClient) {}

  signUp(user: User) {
    return this.http.post<User>(
      `${this.BASE_URL}/authentication/sign-up`,
      user
    );
  }

  signIn(user: User): Observable<boolean> {
    return this.http
      .post<any>(`${this.BASE_URL}/authentication/sign-in`, user)
      .pipe(
        tap((tokens) => this.doLoginUser(user.email, tokens)),
        map(() => true),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
  }

  signOut() {
    return this.http
      .post<any>(`${this.BASE_URL}/authentication/sign-out`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap(() => this.doLogoutUser()),
        map(() => true),
        catchError((error) => {
          // alert(error.error);
          return of(false);
        })
      );
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http
      .post<any>(`${this.BASE_URL}/authentication/refresh-tokens`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap((tokens: Tokens) => {
          this.storeTokens(tokens);
        })
      );
  }

  getJwtToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  private doLoginUser(email: string, tokens: Tokens) {
    this.loggedUser = email;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.ACCESS_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.ACCESS_TOKEN, tokens.accessToken);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
