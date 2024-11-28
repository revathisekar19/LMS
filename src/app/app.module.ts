import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CourseComponent } from './admin-components/course-component/course/course.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './components/enrollcourse/enroll.component';
import { ProfileComponent } from './components/profile/profile.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from './components/register/register.component';
import { EditcourseComponent } from './components/editcourse/editcourse.component';
import { HttpClient, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { AdminComponent } from './admin-components/admin/admin.component';
import { CreateTeacherComponent } from './admin-components/teacher-component/create-teacher/create-teacher.component';
import { CreateStudentComponent } from './admin-components/student-component/create-student/create-student.component';
import { ViewStudentComponent } from './admin-components/student-component/view-student/view-student.component';
import { ViewTeacherComponent } from './admin-components/teacher-component/view-teacher/view-teacher.component';
import { EditTeacherComponent } from './admin-components/teacher-component/edit-teacher/edit-teacher.component';
import { EditStudentComponent } from './admin-components/student-component/edit-student/edit-student.component';
import { ViewCourseComponent } from './admin-components/course-component/view-course/view-course.component';


@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   CourseComponent,
  //  DashboardComponent,
   EnrollComponent,
   ProfileComponent,
   NavbarComponent,
   HomeComponent,
   FooterComponent,
   RegisterComponent,
   EditcourseComponent,
   AdminComponent,
   CreateTeacherComponent,
   CreateStudentComponent,
   ViewStudentComponent,
   ViewTeacherComponent,
   EditTeacherComponent,
   EditStudentComponent,
   ViewCourseComponent,
   
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


