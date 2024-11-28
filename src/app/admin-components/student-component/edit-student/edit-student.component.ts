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
  }

  
  
}