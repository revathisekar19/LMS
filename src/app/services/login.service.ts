import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import * as bcrypt from 'bcryptjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private isAuthenticated: boolean = false;
  private readonly email: string = 'learn@gmail.com'; 
  private readonly password: string = 'learniouser'; 
  constructor() {  }

  public login(username: string, password: string): Observable<boolean> {
    if (username === this.email && password === this.password) {
        this.isAuthenticated = true;
        return of(true);
      } else {
        this.isAuthenticated = false;
        return of(false);
      }
  }

  public isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
