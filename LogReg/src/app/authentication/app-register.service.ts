// app-register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AppRegisterService {
  private url = 'http://localhost:8080'; // Update with your Spring Boot server URL
  
  constructor(private http: HttpClient) {}
  
  getRoles(){
    return this.http.get(this.url+'/authentication/roles')
     
  }

  registerUser(username: string, email: string, password: string,passwordConfirmation: string,role:any){
    return this.http.post(this.url+'/register', {
      username,
      email,
      password,
      passwordConfirmation,
      role
    });
  }
}

