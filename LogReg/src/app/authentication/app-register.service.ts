// app-register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppRegisterService {
  private url = 'http://localhost:8080'; // Update with your Spring Boot server URL

  constructor(private http: HttpClient) {}

 
}

