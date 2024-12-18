import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface Student {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  studentId: string;
}
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  displayedColumns: string[] = [
    'studentId',
    'firstName',
    'middleName',
    'lastName',
    'email',
    'phoneNumber',
    'actions'
  ];
  dataSource = new MatTableDataSource<Student>([]);
  length: number = 0;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild('editStudentForm') editStudentFormTemplate!: TemplateRef<any>;
  @ViewChild('assignFormTemplate') assignFormTemplate!: TemplateRef<any>;

  editForm!: FormGroup;
  assignForm!: FormGroup;
  dialogRef: any;
  
  constructor(private router : Router,private restApiService : RestApiService,  private fb: FormBuilder,
    private dialog: MatDialog){}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.viewStudent();
    this.initializeForm();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  initializeForm(): void {
    this.editForm = this.fb.group({
      studentId: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
    });
    this.assignForm = this.fb.group({
      userId: [''],
      password: [''],
      role: [''],
    });
  }

  viewStudent():void{
    this.restApiService.getStudent().subscribe({
      next:(data : any)=>{
        console.log("Student data",data);
        this.dataSource.data = data;
      },
      error:(error : any)=>{
        console.log("Student error",error);
      }
    });
  }

  editStudent(student: Student): void {
    this.editForm.patchValue(student);
     this.dialogRef = this.dialog.open(this.editStudentFormTemplate, { width: '600px'});
  }

  saveTeacher(): void {
    if (this.editForm.valid) {
      const updatedStudent = this.editForm.value;
      this.restApiService.updateStudent(updatedStudent.studentId, updatedStudent).subscribe({
        next: (response) => {
          console.log('Student updated successfully:', response);
          this.closeDialog();
        },
        error: (error) => {
          console.error('Error updating student:', error);
        },
      });
    }
  }

  openAssignDialog(student: any) {
    this.assignForm.patchValue({
      userId: student.studentId,
      password: '',
      role: '',
    });

    this.dialog.open(this.assignFormTemplate, {width: '400px',data: student});
  }

  assignRole(){
    if(this.assignForm.valid){
    const formData = this.assignForm.value;
    this.restApiService.createRole(formData).subscribe({
      next: (response) => {
        console.log('Role:', response);
        this.closeDialog();
      },
      error: (error) => {
        console.error('Role Error:', error.error);
      },

    });
  }}

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    if(this.dialog){
      this.dialog.closeAll();
    }
  }



}
