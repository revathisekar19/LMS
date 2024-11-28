import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrl: './create-teacher.component.css'
})
export class CreateTeacherComponent implements OnInit{
  teacherForm!: FormGroup;

  constructor(private restApiService : RestApiService,private fb: FormBuilder,private router : Router){}
  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      
      teacherId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      officeHours: ['', Validators.required],
      officeLocation: ['', Validators.required],
    });
    this.onSubmit();
  }

  onSubmit() {
  console.log(this.teacherForm.value);
      this.restApiService.createTeacher(this.teacherForm.value).subscribe({
        next : (res : any)=>{ 
          console.log("Teacher created",res);
          this.teacherForm.reset();
        },
        error : (error : any) => {
          console.log("course error",error);
        }
      });
    
  }
  onReset() {
    this.teacherForm.reset();
  }

  onCancel() {
    this.router.navigate(['/admin']);
    console.log('Cancel button clicked');
  }
}
