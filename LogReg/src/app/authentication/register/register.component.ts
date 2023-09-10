import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { AppRegisterService } from 'src/app/authentication/app-register.service'; // Import the service
import { HttpClient ,HttpErrorResponse} from '@angular/common/http'; // Import HttpClient
import {User} from './user.services'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent{
  public roles:any;
  
  showValidationError=false;
 
  user={username: '', email: '', password: '',passwordConfirmation: '',role_id:''};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AppRegisterService,
    private fb: FormBuilder,
    private Service: AppRegisterService,
    private http: HttpClient ,// Inject HttpClient
    private router: Router
  ) { 
    //Read All Roles From DATABASE
    this.Service.getRoles().subscribe(data => this.roles = data);

   
  }

 


  ngOnInit(){
   
  }

  ngOnDestroy(){
   
  }


  onSubmit(): void {
    console.log("user = ", this.user);
    this.Service.registerUser(this.user).subscribe(data => {
      console.log("Registered successfully", data);
      var numberValue = Number(this.user.role_id);
      // Navigate to the 'home' route after successful registration
      
      if(numberValue === 1){
        this.router.navigate(['/owner/dashboard']);
      }else{
        if(numberValue === 2){
          this.router.navigate(['/scrum/dashboard']);
        }else{
          this.router.navigate(['/developer/dashboard']);
        }
      }
      
    }, error => {
      console.error("Registration failed", error);
    });

  }
  

  
}