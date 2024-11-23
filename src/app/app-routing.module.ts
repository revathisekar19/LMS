import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './components/course/course.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './components/enrollcourse/enroll.component';
import { ViewcourseComponent } from './components/viewcourse/viewcourse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { EditcourseComponent } from './components/editcourse/editcourse.component';
import { AdminComponent } from './admin-components/admin/admin.component';
import { CreateTeacherComponent } from './admin-components/create-teacher/create-teacher.component';
import { CreateStudentComponent } from './admin-components/create-student/create-student.component';
import { ViewStudentsComponent } from './admin-components/view-students/view-students.component';

const routes: Routes = [
{path : '' , component : LoginComponent},
// {path : 'dashboard' , component : DashboardComponent},
{path : 'course' , component : CourseComponent},
{path : 'enroll' , component : EnrollComponent},
{path : 'view', component : ViewcourseComponent},
{path : 'profile' , component : ProfileComponent},
{path : 'home' , component : HomeComponent},
{path : 'register' , component : RegisterComponent},
{path : 'edit' , component : EditcourseComponent},
{path : 'admin' , component : AdminComponent},
{path : 'create-teacher' , component : CreateTeacherComponent},
{path : 'create-student' , component : CreateStudentComponent},
{path : 'student/view' , component : ViewStudentsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
