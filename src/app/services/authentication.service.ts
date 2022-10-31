import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  private username;

  usertoken: string;

  get UserName() {
    return this.username;
  }

  // modify the return type to properly use the full response
  login(username: string, password: string) {
    this.username = username;
    // implement here

    return this.http.post('https://reqres.in/api/login', {
      email: username,
      password: password,
    });
  }

  getUsers(): Observable<any> {
    let list = [];
    console.log(this.usertoken);
    const headers = {
      Authorization: `Bearer ${this.usertoken}`,
      'Content-type': 'application/json',
    };

    return this.http.get('https://reqres.in/api/unknown', {
      headers: new HttpHeaders(headers),
    });
  }
}
