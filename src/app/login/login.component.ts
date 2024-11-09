import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  hidePassword: boolean = true;
  year: number = new Date().getFullYear();
  isLoginMode: boolean = true;


  constructor(private fb: FormBuilder,private router : Router, private loginservice : LoginService,
    public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      firstName: ['', [Validators.required]]

    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }
  
  onSubmit() {
    console.log("logged in")
    const role = this.loginForm.get('role')?.value;
    const firstName = this.loginForm.get('firstName')?.value;
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('firstName', firstName);
     this.loginservice.login();
     this.router.navigate(['/home']);

  }

  goToRegistration() {
    this.isLoginMode = !this.isLoginMode;
    this.router.navigate(['/register']);
  }

}