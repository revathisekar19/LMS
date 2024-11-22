import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditcourseComponent } from '../editcourse/editcourse.component';
import { MatDialog } from '@angular/material/dialog';
import { RestApiService } from '../../services/rest-api.service';
import { HttpClient } from '@angular/common/http';
export interface Course {
  id: string;
  code: string;
  name: string; 
  description: string;
}

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent implements  AfterViewInit, OnInit{
  userName: string = '';
  userRole : string = '';
  constructor(private router : Router, private http : HttpClient,
    private dialog : MatDialog, private restApiService : RestApiService
  ){
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('role') || '';
  }
  ngOnInit(): void {
    this.loadCourse();
  }
 
  displayedColumns: string[] = ['id', 'code', 'name' ,'description'];
  dataSource = new MatTableDataSource([]);
  length: number = 0;
  

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  

  ngAfterViewInit(): void {

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
      this.restApiService.viewCourse().subscribe({
        next : (res : any)=>{ 
          this.dataSource.data = res;
          console.log("course list",res);
        },
        error : (error : any) => {
          console.log("course error",error);
        }
      });
    }

}
