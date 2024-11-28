import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName: string = '';
  userRole : string = '';
  constructor(private loginservice : LoginService){
    this.userName = sessionStorage.getItem('firstName') || '';
    this.userRole = sessionStorage.getItem('userRole') || '';
    console.log('userole',this.userRole);
  }
  logout(){
    sessionStorage.clear();
    this.loginservice.logout();
  }

}
