import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Route, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
export interface Course{
  code : string;
  name : string;
  description : string;
}
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent implements OnInit{
  userRole: string;

  constructor(private router : Router,private restApiService : RestApiService,  private fb: FormBuilder,
    private dialog: MatDialog){
      this.userRole = sessionStorage.getItem('userRole') || '';
    }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeForm();
    this.viewCourse();
  }
  displayedColumns: string[] = [
    'code',
    'name',
    'description',
    'actions'
  ];
  dataSource = new MatTableDataSource<Course>([]);
  length: number = 0;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild('editCourseForm') editCourseFormTemplate!: TemplateRef<any>;
  editForm!: FormGroup;
  dialogRef: any;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  initializeForm(): void {
    this.editForm = this.fb.group({
      code: [''],
      name: [''],
      description: [''],
     
    });
  }

  viewCourse(){
    this.restApiService.viewCourse().subscribe({
      next:(data : any)=>{
        console.log("Course data",data);
        this.dataSource.data = data;
      },
      error:(error : any)=>{
        console.log("Course error",error);
      }
    });
  }
  editCourse(course: Course): void {
    this.editForm.patchValue(course);
     this.dialogRef = this.dialog.open(this.editCourseFormTemplate, {
      width: '600px',
    });
  }

  saveCourse(): void {
    if (this.editForm.valid) {
      const updatedCourse = this.editForm.value;
      console.log("ut",updatedCourse);
      this.restApiService.updateCourse(updatedCourse.code, updatedCourse).subscribe({
        next: (response) => {
          console.log('Course updated successfully:', response);
          this.closeDialog();
        },
        error: (error) => {
          console.error('Error updating Course:', error);
        },
      });
    }
  }
  enroll(course: Course):void{
    console.log(course)
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
