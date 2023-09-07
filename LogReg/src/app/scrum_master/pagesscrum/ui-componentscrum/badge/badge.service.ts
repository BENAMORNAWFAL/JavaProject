// app-register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class AppBadgeService {
  private url = 'http://localhost:8080'; // Update with your Spring Boot server URL

  constructor(private http: HttpClient) {}
  
  getuserconnect(){
    return this.http.get(this.url+'/badge')
     
  }
  
}

