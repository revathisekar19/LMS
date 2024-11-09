import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  hidePassword: boolean = true;
  year: number = new Date().getFullYear();;

  constructor(private fb: FormBuilder, private router : Router, private cdr: ChangeDetectorRef) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required] 
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      const firstName = this.registrationForm.get('firstName')?.value;
    const role = this.registrationForm.get('role')?.value;
    console.log("User registered");
    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('role', role);
    this.router.navigateByUrl('/home');

    }
  }

  
}
