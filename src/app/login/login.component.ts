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
  year: number = new Date().getFullYear();;

  constructor(private fb: FormBuilder,private router : Router, private loginservice : LoginService,
    public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }
  // onSignup(){
  //   this.router.navigate(['/register']);
  // }

  
  onSubmit() {
    console.log("logged in")
this.loginservice.login();
this.router.navigate(['/home']);

  }

}