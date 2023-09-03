import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getRoles(){
    return this.http.get(this.url+'/authentication/roles')
     
  }

  registerUser(profile:any){
    console.log("hello from user.service",profile)
    return this.http.post(this.url+'/authentication/register',profile)
  }
}