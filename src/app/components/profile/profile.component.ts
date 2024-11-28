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
  constructor( private restApiService : RestApiService ){}
  ngOnInit(): void {
    this.getStudent();
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('role') || '';
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

  //
}
