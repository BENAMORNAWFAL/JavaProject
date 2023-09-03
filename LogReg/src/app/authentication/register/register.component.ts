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
  errorMessage: any = {};
  public roles:any;
  profile={username:"",email:"",password:"",passwordConfirmation:"",role:""};
  showValidationError=false;
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private Service: UserService,
    private http: HttpClient // Inject HttpClient
  ) { 
    //Read All Roles From DATABASE
    this.Service.getRoles().subscribe(data => this.roles = data);

    //Create new User
    this.Service.registerUser(this.profile).subscribe(
      
      (response) => {
        console.log("user created successfully ",response);      },
      (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.errorMessage=error.error;
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    );
  }

 


  ngOnInit(){
   
  }

  ngOnDestroy(){
   
  }


  
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]],
    passwordConfirmation: [['', Validators.required]],
    role: [['', Validators.required]],
  });

  get objectUser() {
    return this.form.controls;
  }


  submitForm() {
    if (this.form.valid){
// If the form is valid, proceed with form submission
    // Send the form data to your backend
    // this.profile = this.form.value; // Get the form data object
    console.log('Form Data:', this.profile);

    // Example: Send the data to your backend using an HTTP POST request
    this.http.post('/api/your-backend-endpoint', this.profile).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // Optionally, you can navigate to a different page or perform other actions on success
      },
      (error) => {
        console.error('An error occurred while submitting the form:', error);
        // Handle any errors that occur during form submission
      }
    );
  } else {
    // If the form is invalid, display validation errors
    // You can access errors for each field using this.myForm.get('field_name').errors
    // For example, you can set a flag to display a generic error message or customize the error handling.
    this.showValidationError = true;
  }
  }
  
}