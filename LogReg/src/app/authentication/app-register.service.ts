// app-register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class AppRegisterService {
  private url = 'http://localhost:8080'; // Update with your Spring Boot server URL

  constructor(private http: HttpClient) {}
  
  getRoles(){
    return this.http.get(this.url+'/authentication/roles')
     
  }
  
  registerUser(user:{username: string, email: string, password: string,passwordConfirmation: string,role_id:any}){
    console.log("in side app reg")
    return this.http.post(this.url+'/authentication/register', user);
  }
}

