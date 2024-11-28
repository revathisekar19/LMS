import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userName : string = '';
  userRole : string = '';
  userId : string = '';
  teacherProfile: any = {};
  constructor( private restApiService : RestApiService ){}
  ngOnInit(): void {
    this.getStudent();
    this.getTeacherById();
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('userRole') || '';
    }

    //get all student 
  getStudent(){
  this.restApiService.getStudent().subscribe({
    next : (res : any)=>{ 
      console.log("Student list",res);
    },
    error : (error : any) => {
      console.log("course error",error);
    }
  });
  }

  //get all teacher by id
  getTeacherById(){
    this.userId = sessionStorage.getItem('userId') || '';
    this.restApiService.getTeacherById(this.userId).subscribe({
      next : (res : any)=>{ 
        console.log("Teacher list",res);
        this.teacherProfile = res;
        const userName = sessionStorage.setItem('firstName', res.firstName);

      },
      error : (error : any) => {
        console.log("Teacher error",error);
      }
    })
  }
}
