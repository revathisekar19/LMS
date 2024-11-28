import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseComponent } from './admin-components/course-component/course/course.component';
import { EditcourseComponent } from './components/editcourse/editcourse.component';
import { EnrollComponent } from './components/enrollcourse/enroll.component';
import { RegisterComponent } from './components/register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewcourseComponent } from './components/viewcourse/viewcourse.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    // Create a mock instance of LoginService
    mockLoginService = jasmine.createSpyObj('LoginService', ['isLoggedIn'], {
      isLoggedIn: of(false), // Default value for the observable
    });

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: LoginService, useValue: mockLoginService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ilearn'`, () => {
    expect(component.title).toEqual('ilearn');
  });

  it('should set isLoggedIn to false when login status changes to false', () => {
    // Update the mock observable to emit false
    mockLoginService.isLoggedIn = of(false);

    // Re-initialize the component to ensure the latest observable value is used
    component.ngOnInit();

    // Check the updated value
    expect(component.isLoggedIn).toBeFalse();
  });
});
