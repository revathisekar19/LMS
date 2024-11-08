import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import * as bcrypt from 'bcryptjs';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = new BehaviorSubject<boolean>(false); 
  isLoggedIn = this.loggedIn.asObservable();

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
