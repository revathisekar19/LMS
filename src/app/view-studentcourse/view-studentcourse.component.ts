import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-view-studentcourse',
  templateUrl: './view-studentcourse.component.html',
  styleUrl: './view-studentcourse.component.css'
})
export class ViewStudentcourseComponent implements OnInit{
  userRole : string = '';
  userId : string = '';
  constructor(private restApiService : RestApiService){
    this.userRole = sessionStorage.getItem('userRole') || '';
    this.userId = sessionStorage.getItem('userId') || '';
  }
  displayedColumns: string[] = [
    'studentCourseId',
    'studentId',
    'teacherCourseId',
    'teacherId',
    'courseCode',
    'venue',
    'mode',
    'daysAndTime',
  ];
  enrollmentDetails: any;
  courses: any[] = [];

  ngOnInit(): void {
     this.getEnrolledCourses();
  }

  getEnrolledCourses(){
    this.restApiService.getStudentCourseById(this.userId).subscribe({
      next:(data : any)=>{
        console.log('Enrollment Details:',data);
        this.enrollmentDetails = data;
      },
      error:(error : any)=>{
        console.error('Error fetching enrolled courses:',error);
      }
    })
  }
}
