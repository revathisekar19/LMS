import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  isDropdownOpen = false;
  constructor(private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; 
  }

}
