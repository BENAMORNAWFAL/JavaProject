import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRegisterService } from 'src/app/authentication/app-register.service'; // Import the service
import { HttpClient ,HttpErrorResponse} from '@angular/common/http'; // Import HttpClient
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent{
  
  public roles:any;
  
  showValidationError=false;
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [, [Validators.required,Validators.minLength(8)]],
    passwordConfirmation: [, [Validators.required]],
    rolee: [[] , [Validators.required]],
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private authService: AppRegisterService,
    private fb: FormBuilder,
    private Service: AppRegisterService,
    private http: HttpClient // Inject HttpClient
  ) { 
    //Read All Roles From DATABASE
    this.Service.getRoles().subscribe(data => this.roles = data);

  }

 


  ngOnInit(){
   
  }

  ngOnDestroy(){
   
  }


  onSubmit(): void {
    const username = this.form.get('username')?.value;
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    const passwordConfirmation = this.form.get('passwordConfirmation')?.value;
    const role = this.form.get('rolee')?.value;
    console.log("in side submit",role)
    if (username && email && password && passwordConfirmation && role) {
      this.authService.registerUser(username, email, password, passwordConfirmation, role).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  }
  

  
}