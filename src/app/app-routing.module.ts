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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
