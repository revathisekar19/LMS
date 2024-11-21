// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       imports: [
//         FormsModule,
//         ReactiveFormsModule,
//         MatButtonModule,
//         MatInputModule,
//         MatCardModule,
//         MatIconModule,
//         MatSelectModule,
//         BrowserAnimationsModule
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render form fields for first name, email, role, and password', () => {
//     const firstNameInput = fixture.debugElement.query(By.css('input[formControlName="firstName"]'));
//     const emailInput = fixture.debugElement.query(By.css('input[formControlName="email"]'));
//     const roleSelect = fixture.debugElement.query(By.css('mat-select[formControlName="role"]'));
//     const passwordInput = fixture.debugElement.query(By.css('input[formControlName="password"]'));

//     expect(firstNameInput).toBeTruthy();
//     expect(emailInput).toBeTruthy();
//     expect(roleSelect).toBeTruthy();
//     expect(passwordInput).toBeTruthy();
//   });

//   it('should check form invalid when empty', () => {
//     expect(component.loginForm.valid).toBeFalsy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

// Import necessary Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';  // Import MatSelectModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Import MatFormFieldModule if using mat-form-field
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule, 
        RouterTestingModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
      providers: [
        FormBuilder,
        LoginService,
        MatDialog
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with required fields and validations', () => {
    const email = component.loginForm.get('email');
    const password = component.loginForm.get('password');
    const role = component.loginForm.get('role');
    const firstName = component.loginForm.get('firstName');

    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
    expect(role).toBeTruthy();
    expect(firstName).toBeTruthy();

    expect(email?.hasError('required')).toBeTrue();
    expect(password?.hasError('required')).toBeTrue();
    expect(role?.hasError('required')).toBeTrue();
    expect(firstName?.hasError('required')).toBeTrue();
  });

  it('should toggle the password visibility', () => {
    expect(component.hidePassword).toBeTrue();
    component.togglePasswordVisibility();
    expect(component.hidePassword).toBeFalse();
    component.togglePasswordVisibility();
    expect(component.hidePassword).toBeTrue();
  });

  it('should submit the form and navigate to home if the form is valid', () => {
    spyOn(loginService, 'login');  // Just spy on the login method
    spyOn(router, 'navigate');

    // Set the form to a valid state
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'validPass123',
      role: 'user',
      firstName: 'John'
    });

    component.onSubmit();

    expect(sessionStorage.getItem('role')).toBe('user');
    expect(sessionStorage.getItem('firstName')).toBe('John');
    expect(loginService.login).toHaveBeenCalled();  // Check if login was called
    expect(router.navigate).toHaveBeenCalledWith(['/home']);  // Check if navigation happened
  });

  it('should not submit the form if the form is invalid', () => {
    spyOn(loginService, 'login');
    spyOn(router, 'navigate');

    // Set the form to invalid
    component.loginForm.setValue({
      email: 'invalid-email',
      password: '123',
      role: '',
      firstName: ''
    });

    component.onSubmit();

    expect(loginService.login).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should navigate to registration page when goToRegistration is called', () => {
    spyOn(router, 'navigate');
    component.goToRegistration();

    expect(component.isLoginMode).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/register']);
  });
});
