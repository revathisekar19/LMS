import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ilearn';
  constructor(private loginservice : LoginService){}
  isAuthenticated() {
    return this.loginservice.isAuthenticatedUser();
  }
}
