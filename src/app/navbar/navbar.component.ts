import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  breadCrumbItems!: Array<{}>;

  constructor(private loginservice : LoginService){}
  logout(){
    this.loginservice.logout();
  }
}
