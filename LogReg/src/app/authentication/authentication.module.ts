import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AuthenticationRoutes } from './authentication.routing';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material/select'; // Add this import

@NgModule({
  imports: [
    MatSelectModule,
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppSideLoginComponent,
    AppSideRegisterComponent,
  ],
  exports: [
    AppSideLoginComponent,
    AppSideRegisterComponent,
  ],
})
export class AuthenticationModule {}
