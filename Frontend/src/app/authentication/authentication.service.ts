import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/authentication'; // Update with your server's URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Send a POST request to your Spring Boot server for user authentication
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
