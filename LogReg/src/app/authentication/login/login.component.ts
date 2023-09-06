import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service'; // Import your authentication service
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  loger={username: '',password: ''}

  constructor(private authService: AuthenticationService, private router: Router) {}

  // Implement the login function
  login() {
    // Check if both username and password are provided
    // if (this.loger) {
    //   // Call the login method from your authentication service
    //   this.authService.login(this.loger).subscribe(
    //     (response) => {
    //       // Successful login
    //       console.log('Login successful', response);
    //       // Redirect to the dashboard or any desired page
    //       this.router.navigate(['/dashboard']);
    //     },
    //     (error) => {
    //       // Error handling
    //       console.error('Login error', error);
    //       // Display an error message to the user
    //     }
    //   );
    // } else {
    //   // Handle empty fields or show a validation message
    // }
  }
}
