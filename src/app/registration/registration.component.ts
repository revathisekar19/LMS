import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  hidePassword: boolean = true;
  year: number = new Date().getFullYear();;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; // Toggle the visibility
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      const { firstName, lastName,email, password } = this.registrationForm.value;
      console.log(firstName);
      console.log(lastName);
      console.log('Email:', email);
      console.log('Password:', password);
      alert("Welcome");
    }
  }
}
