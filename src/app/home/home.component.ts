import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userRole : string = '';
  constructor(){
    this.userRole = sessionStorage.getItem('role') || '';
  }
  ngOnInit(): void {
  }

}
