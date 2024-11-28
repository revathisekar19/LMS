import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder,private router : Router,private restApiService : RestApiService) {
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
    console.log(this.studentForm.value);
    this.restApiService.createStudent(this.studentForm.value).subscribe({
      next : (res : any)=>{ 
        console.log("Student created",res);
        this.studentForm.reset();
      },
      error : (error : any) => {
        console.log("Student Error",error);
      }
    });
  }
  
  onCancel() {
    this.router.navigate(['/admin']);
    console.log('Cancel button clicked');
  }

  onReset() {
    this.studentForm.reset();
  }
}
