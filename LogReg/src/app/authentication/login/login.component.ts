import { Component } from '@angular/core';
import { AuthService } from './login.service';
import { Router } from '@angular/router'; // Import Router to handle navigation
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService,private router: Router) {}

 
    // login(){this.authService.login(this.username, this.password).subscribe(
    //   (response: any) => {
    //     // Assuming your login service returns a response, you can handle it here
    //     console.log('Login successful');
        
    //     // You can navigate to the desired page on successful login
    //     this.router.navigate(['/dashboard']); // Adjust the route as needed
    //   },
    //   error => {
    //     // Handle errors here
    //     this.errorMessage = 'Login failed. Please check your credentials.';
    //     console.error('Login error:', error);
    //   }
    // );}
  
  
}
