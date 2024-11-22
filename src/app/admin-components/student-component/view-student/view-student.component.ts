import { Component } from '@angular/core';

export interface Student {
  id: string;
  code: string;
  name: string; 
  description: string;
}
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent {

}
