import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service'; // Import your authentication service
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Initialize an error message property

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Implement the login function
  login() {
    if (this.loginForm.valid) {
      const credentials = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };
  
      this.authService.login(credentials.username , credentials.password).subscribe(
        (response) => {
          // Successful login
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Error handling
          console.error('Login error', error);
        }
      );
    } else {
      // Handle form validation errors or show a validation message
      this.errorMessage = 'Please fill in all the required fields.'; // Set the error message
    }
  }
}
