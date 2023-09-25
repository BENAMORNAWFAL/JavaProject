// app-register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AppBadgeService {
  // private url = 'http://localhost:8080'; // Update with your Spring Boot server URL

  // constructor(private http: HttpClient) {}
  
  // getuserconnect(){
  //   return this.http.get(this.url+'/badge').pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       // Handle the error here and return it as an observable
  //       return throwError(error);
  //     }));
     
  // }
  
}

