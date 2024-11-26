import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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
  @ViewChild('editTeacherForm') editTeacherFormTemplate!: TemplateRef<any>;
  
  editForm!: FormGroup;
  dialogRef: any;
  constructor(private router : Router,private restApiService : RestApiService,  private fb: FormBuilder,
    private dialog: MatDialog) {
  
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.viewTeacher();
    this.initializeForm();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // editTeacher(teacher: Teacher): void {
  //   this.router.navigate(['/edit-teacher']);
  //   console.log('Edit Teacher:', teacher);
  // }
  initializeForm(): void {
    this.editForm = this.fb.group({
      teacherId: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      officeHours: [''],
      officeLocation: [''],
    });
  }

  viewTeacher():void{
    this.restApiService.viewTeacher().subscribe({
      next:(data : any)=>{
        console.log("Teacher data",data);
        this.dataSource.data = data;
      },
      error:(error : any)=>{
        console.log("Teacher error",error);
      }
      });
  }

  editTeacher(teacher: Teacher): void {
    this.editForm.patchValue(teacher);
     this.dialogRef = this.dialog.open(this.editTeacherFormTemplate, {
      width: '600px',
    });
  }

  saveTeacher(): void {
    if (this.editForm.valid) {
      const updatedTeacher = this.editForm.value;
      console.log("ut",updatedTeacher);
      this.restApiService.updateTeacher(updatedTeacher.teacherId, updatedTeacher).subscribe({
        next: (response) => {
          console.log('Teacher updated successfully:', response);
          this.closeDialog();
        },
        error: (error) => {
          console.error('Error updating teacher:', error);
        },
      });
    }
  }


  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
