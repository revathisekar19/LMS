import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  
  constructor(private router : Router){}
 
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
}
