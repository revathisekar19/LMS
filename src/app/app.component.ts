import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ilearn';
  isLoggedIn = false;
  constructor(private loginservice : LoginService){}
  ngOnInit(): void {
    this.loginservice.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    });  }
 
}
