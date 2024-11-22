import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Teacher {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  teacherId: string;
  officeHours: string;
  officeLocation: string;
}
@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrl: './view-teacher.component.css'
})
export class ViewTeacherComponent implements OnInit{
  displayedColumns: string[] = [
    'teacherId',
    'firstName',
    'middleName',
    'lastName',
    'email',
    'phoneNumber',
    'officeHours',
    'officeLocation',
    'actions'
  ];
  dataSource = new MatTableDataSource<Teacher>([]);
  length: number = 0;

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor() {
  
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    // Simulate API response
    const teachers: Teacher[] = [
      {
        id: '1',
        firstName: 'John',
        middleName: 'A.',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
        teacherId: 'T001',
        officeHours: 'Mon-Fri 9AM-5PM',
        officeLocation: 'Room 101'
      },
      {
        id: '2',
        firstName: 'Jane',
        middleName: 'B.',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phoneNumber: '0987654321',
        teacherId: 'T002',
        officeHours: 'Mon-Fri 10AM-4PM',
        officeLocation: 'Room 102'
      }
    ];

    this.dataSource.data = teachers;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editTeacher(teacher: Teacher): void {
    console.log('Edit Teacher:', teacher);
  }

}
