import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userName : string = '';
  userRole : string = '';
  constructor(){}
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('role') || '';
    }

}
