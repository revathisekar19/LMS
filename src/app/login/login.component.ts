import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

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

  constructor(private fb: FormBuilder,private router : Router, private loginservice : LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; // Toggle the visibility
  }
  
  onSubmit() {

    this.loginservice.login(this.email,this.password).subscribe({
      next:res=>{
        if(res){
          alert("Redirecting to Main Application")
          this.router.navigate(['/home']);
        }
     else {
    alert("Please enter Valid Details")
     }
      },
      error:error=>{
        console.log('Authentication failed:',error);
      }
    })
        this.email='';
    this.password='';
      }
  }

