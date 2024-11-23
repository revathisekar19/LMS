import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder,private router : Router) {
    this.studentForm = this.fb.group({
      studentId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Student Data:', this.studentForm.value);
    } else {
      console.error('Form is invalid!');
    }
  }
  onCancel() {
    this.router.navigate(['/admin']);
    console.log('Cancel button clicked');
  }

  onReset() {
    this.studentForm.reset();
  }
}
