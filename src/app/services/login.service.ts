import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private roleKey = 'userRole';
  private loggedIn = new BehaviorSubject<boolean>(false); 
  isLoggedIn = this.loggedIn.asObservable();

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
// Store the role in sessionStorage
setUserRole(role: string) {
  sessionStorage.setItem(this.roleKey, role);
}

// Retrieve the role from sessionStorage
getUserRole(): string | null {
  return sessionStorage.getItem(this.roleKey);
}

// Clear role from sessionStorage (e.g., on logout)
clearUserRole() {
  sessionStorage.removeItem(this.roleKey);
}
}
