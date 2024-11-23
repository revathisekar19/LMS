import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseId: ['', Validators.required],
      courseName: ['', Validators.required],
      instructorName: ['', Validators.required],
      courseVenue: ['', Validators.required],
      courseTiming: ['', Validators.required],
      courseMode: ['', Validators.required],
      courseDays: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      console.log("Course Created:", this.courseForm.value);
      this.courseForm.reset();
    }
  }

  onCancel() {
    console.log("Creation Canceled");
    this.courseForm.reset();
  }

  onReset() {
    this.courseForm.reset();
  }
}
