import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../../../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  courseForm: FormGroup;

  constructor(private fb: FormBuilder,private restApiService : RestApiService,private router : Router) {
    this.courseForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description : [''],
      // instructorName: ['', Validators.required],
      // courseVenue: ['', Validators.required],
      // courseTiming: ['', Validators.required],
      // courseMode: ['', Validators.required],
      // courseDays: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.restApiService.createCourse(this.courseForm.value).subscribe({
      next : (res : any)=>{ 
        console.log("Course created",res);
        this.courseForm.reset();
      },
      error : (error : any) => {
        console.log("Course Error",error);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin']);
    this.courseForm.reset();
  }

  onReset() {
    this.courseForm.reset();
  }
}
