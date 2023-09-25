import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log("headers=======",headers);
    
    return this.http.post(this.loginUrl, body).pipe
    
  }
}
