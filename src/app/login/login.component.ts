import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { RestApiService } from '../services/rest-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  hidePassword: boolean = true;
  year: number = new Date().getFullYear();
  isLoginMode: boolean = true;


  constructor(private fb: FormBuilder,private router : Router, private loginservice : LoginService,
    public dialog: MatDialog, private restApiService : RestApiService) {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      userId: ['', [Validators.required]],


    });
  }
  ngOnInit(): void {
    this.onSubmit();
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }
  
  onSubmit() {
    const userId = this.loginForm.value.userId;
    this.restApiService.login(userId).subscribe({
      next:(res:any)=>{
        sessionStorage.setItem('userRole', res.role);
        sessionStorage.setItem('userId', userId);
        this.loginservice.login();
        switch (res.role) {
          case 'STUDENT':
            this.router.navigate(['/home']);
            break;
          case 'TEACHER':
            this.router.navigate(['/home']);
            break;
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
          default:
            alert('Unknown role. Please contact support.');
        }
      },
      error:(error :any)=>{
        console.log(error);
      }
    });
  }

  goToRegistration() {
    this.isLoginMode = !this.isLoginMode;
    this.router.navigate(['/register']);
  }

}