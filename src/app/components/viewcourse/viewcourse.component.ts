import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditcourseComponent } from '../editcourse/editcourse.component';
import { MatDialog } from '@angular/material/dialog';
export interface Course {
  id: string;
  name: string;
  description: string;
  timings: string;
  venue: string;
}

const COURSE_DATA: Course[] = [
  { id: '01', name: 'Jonathon', description: 'Senior Implementation Architect', timings: '9 AM - 12 PM', venue: 'Hauck Inc' },
  { id: '02', name: 'Harold', description: 'Forward Creative Coordinator', timings: '1 PM - 3 PM', venue: 'Metz Inc' },
  { id: '03', name: 'Shannon', description: 'Legacy Functionality Associate', timings: '3 PM - 5 PM', venue: 'Zemlok Group' },
  { id: '04', name: 'Jonathon', description: 'Senior Implementation Architect', timings: '9 AM - 12 PM', venue: 'Hauck Inc' },
  { id: '05', name: 'Harold', description: 'Forward Creative Coordinator', timings: '1 PM - 3 PM', venue: 'Metz Inc' },
  { id: '06', name: 'Shannon', description: 'Legacy Functionality Associate', timings: '3 PM - 5 PM', venue: 'Zemlok Group' },
  { id: '07', name: 'Jonathon', description: 'Senior Implementation Architect', timings: '9 AM - 12 PM', venue: 'Hauck Inc' },
  { id: '08', name: 'Harold', description: 'Forward Creative Coordinator', timings: '1 PM - 3 PM', venue: 'Metz Inc' },
  { id: '09', name: 'Shannon', description: 'Legacy Functionality Associate', timings: '3 PM - 5 PM', venue: 'Zemlok Group' },
  { id: '10', name: 'Shannon', description: 'Legacy Functionality Associate', timings: '3 PM - 5 PM', venue: 'Zemlok Group' },

];
@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent implements  AfterViewInit{
  userName: string = '';
  userRole : string = '';
  constructor(private router : Router,
    private dialog : MatDialog
  ){
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('role') || '';
  }
 
  displayedColumns: string[] = ['id', 'name', 'description', 'timings', 'venue', 'actions'];
  dataSource = new MatTableDataSource<Course>(COURSE_DATA);
  length: number = COURSE_DATA.length; 

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  

  ngAfterViewInit(): void {

    this.dataSource.data = COURSE_DATA;

    this.dataSource.paginator = this.paginator;
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEnroll(){
    this.router.navigate(['/enroll']);
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
