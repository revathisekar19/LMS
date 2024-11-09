import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userName : string = '';
  constructor(){}
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('firstName') || '';
  }

}
