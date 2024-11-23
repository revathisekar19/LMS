import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
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

  updateStudent(student: any): void {
    this.restApiService.updateStudent(student).subscribe(
      (response) => {
        console.log('Student updated successfully:', response);
        alert('Student updated successfully!');
      },
      (error) => {
        console.error('Error updating student:', error);
        alert('Failed to update student. Please try again.');
      }
    );
  }
  
}