import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseComponent } from './course/course.component';
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        RouterModule.forRoot([]), 
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [
        AppComponent,
        LoginComponent,
   CourseComponent,
  //  DashboardComponent,
   EnrollComponent,
   ViewcourseComponent,
   ProfileComponent,
   NavbarComponent,
   HomeComponent,
   FooterComponent,
   RegisterComponent,
   EditcourseComponent
      ],
      
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ilearn'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ilearn');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ilearn');
  });
});
