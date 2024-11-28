import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{
  courses: any[] = [];
  displayedColumns: string[] = ['courseCode', 'venue', 'mode', 'daysAndTime', 'actions'];

  constructor(private router : Router,private restApiService : RestApiService,  private fb: FormBuilder,
    private dialog: MatDialog){}
    
    dataSource = new MatTableDataSource<any>([]);
    length: number = 0;
    @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngOnInit(): void {
    this.viewCourse();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewCourse(){
    this.restApiService.getCourseTeacher().subscribe({
      next:(data : any)=>{
        console.log("Course data",data);
        this.courses = data;
        this.dataSource.data = this.courses;
      },
      error:(error : any)=>{
        console.log("Course error",error);
      }
    });
  }

  enroll(course: any) {
    // Log the course object
    console.log('Enrolling in course:', course);
  
    // Call the restApiService.enrollStudent method
    this.restApiService.enrollStudent(course).subscribe({
      next: (response) => {
        console.log('Student enrolled successfully:', response);
      },
      error: (error) => {
        console.error('Enrollment error:', error);
      }
    });
  }
  
}
