import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  // courseForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.courseForm = this.fb.group({
  //     courseId: ['', Validators.required],
  //     courseName: ['', Validators.required],
  //     instructorName: ['', Validators.required],
  //     courseVenue: ['', Validators.required],
  //     courseTiming: ['', Validators.required],
  //     courseMode: ['', Validators.required],
  //     courseDays: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.courseForm.valid) {
  //     console.log("Course Created:", this.courseForm.value);
  //     this.courseForm.reset();
  //   }
  // }

  // onCancel() {
  //   console.log("Creation Canceled");
  //   this.courseForm.reset();
  // }

  // onReset() {
  //   this.courseForm.reset();
  // }
  enrollmentForm !: FormGroup ;
  courses: any[] = [
    { id: '1', name: 'Introduction to Programming' },
    { id: '2', name: 'Data Structures and Algorithms' },
    { id: '3', name: 'Web Development' },
    { id: '4', name: 'Database Systems' }
  ];  
  constructor(private fb: FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.enrollmentForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.enrollmentForm.valid) {
      const enrollmentData = this.enrollmentForm.value;
      console.log('Enrollment Data:', enrollmentData);
      alert(`Student ID: ${enrollmentData.studentId} has enrolled in course: ${enrollmentData.courseId}`);
    } else {
      alert('Please fill out all fields.');
    }
  }
  onCancel(){
this.router.navigate(['/view']);
  }
}

