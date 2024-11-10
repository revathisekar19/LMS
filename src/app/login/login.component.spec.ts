import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render form fields for first name, email, role, and password', () => {
    const firstNameInput = fixture.debugElement.query(By.css('input[formControlName="firstName"]'));
    const emailInput = fixture.debugElement.query(By.css('input[formControlName="email"]'));
    const roleSelect = fixture.debugElement.query(By.css('mat-select[formControlName="role"]'));
    const passwordInput = fixture.debugElement.query(By.css('input[formControlName="password"]'));

    expect(firstNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(roleSelect).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should check form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
});
