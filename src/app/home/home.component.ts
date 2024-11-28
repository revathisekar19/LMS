import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userRole : string = '';
  userId : string = '';
  courses: any[] = [];
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
  courseDetails:any;
  enrolledCourses: any[] = [];
  constructor(private restApiService : RestApiService){
    this.userRole = sessionStorage.getItem('userRole') || '';
    this.userId = sessionStorage.getItem('userId') || '';
  }
  ngOnInit(): void {
    if (this.userRole === 'TEACHER') {
      this.fetchTeacherCourses();
    }
    if(this.userRole === 'STUDENT'){
      this.getEnrolledCourses();
    }
  }
  fetchTeacherCourses(){
    this.restApiService.getCoursesByTeacherId(this.userId).subscribe({
      next:(data : any)=>{
        console.log('Courses fetched:',data);
        this.courses = data;
      },
      error:(error : any)=>{
        console.log('Error fetching courses:',error);
      }

    });
  }
  viewCourseDetails(course: any): void {
    const teacherCourseId = course.teacherCourseId;

    this.restApiService.getStudentCourse(teacherCourseId).subscribe({
      next:(data : any)=>{
        console.log('Enrollment Details:',data);
        this.enrollmentDetails =  data;
      },
      error:(error : any)=>{
        console.error('Error fetching enrollment details:',error);
      }
    });
   
  }

  getEnrolledCourses(){
    this.restApiService.getStudentCourseById(this.userId).subscribe({
      next:(data : any)=>{
        console.log('Enrollment Details:',data);
        this.enrolledCourses = data;
      },
      error:(error : any)=>{
        console.error('Error fetching enrolled courses:',error);
      }
    })
  }
}
