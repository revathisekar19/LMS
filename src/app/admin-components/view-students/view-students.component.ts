import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css'] // Corrected property name
})
export class ViewStudentsComponent implements OnInit {
  students: any[] = []; // To store the fetched student data
  errorMessage: string = ''; // To handle errors, if any

  constructor(private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  viewDetails(studentId: string){
    console.log("Nothing is " + studentId)
  }

  fetchStudents(): void {
    this.restApiService.getStudent().subscribe(
      (data) => {
        this.students = data; // Store the fetched data
        console.log('Students fetched successfully:', this.students);
      },
      (error) => {
        this.errorMessage = 'Failed to fetch student data.';
        console.error('Error fetching students:', error);
      }
    );
  }
}
