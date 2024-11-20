import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditcourseComponent } from '../editcourse/editcourse.component';
import { MatDialog } from '@angular/material/dialog';
import { RestApiService } from '../../services/rest-api.service';
export interface Course {
  id: string;
  name: string;
  description: string;
  code: string;
}

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent implements  AfterViewInit, OnInit{
  userName: string = '';
  userRole : string = '';
  constructor(private router : Router,
    private dialog : MatDialog, private restApiService : RestApiService
  ){
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('role') || '';
  }
  ngOnInit(): void {
    this.loadCourse();
  }
 
  // displayedColumns: string[] = ['id', 'name', 'description', 'timings', 'venue', 'actions'];
  displayedColumns: string[] = ['id', 'code', 'name' ,'description'];
  dataSource = new MatTableDataSource<Course>([]);
  length: number = 0;
  course : any;
  // dataSource = new MatTableDataSource<Course>(COURSE_DATA);
  // length: number = COURSE_DATA.length; 

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  

  ngAfterViewInit(): void {
    this.loadCourse();
    this.dataSource.data = this.course;
    console.log(this.course);

    this.dataSource.paginator = this.paginator;
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEnroll(){
    this.router.navigate(['/enroll']);
  }

   //load all courses
   loadCourse(){
    this.restApiService.viewCourse().subscribe(
      (response: any) => {
        this.course = response;
        console.log(response);
        this.dataSource.data = response;
        this.length = response.length;
      },
      (error) => {
        console.error('Error loading courses:', error);
      }

    )
   }

  // Open Edit Course Dialog
  openEditDialog(course: Course): void {
    if (this.userRole === 'teacher') {
      const dialogRef = this.dialog.open(EditcourseComponent, {
        width: '500px',
        data: course, // Passing course data to dialog
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // You can update the course list after the dialog is closed with updated data
          const index = this.dataSource.data.findIndex(c => c.id === result.id);
          if (index !== -1) {
            this.dataSource.data[index] = result; // Update the course data
            this.dataSource._updateChangeSubscription(); // Refresh table
          }
        }
      });
    } else {
      // Optionally show a message if not a teacher
      alert('You do not have permission to edit courses.');
    }
  }

}
