import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName: string = '';
  constructor(private loginservice : LoginService){
    this.userName = sessionStorage.getItem('firstName') || '';
    console.log("username",this.userName);
  }
  logout(){
    sessionStorage.clear();
    this.loginservice.logout();
  }

}
