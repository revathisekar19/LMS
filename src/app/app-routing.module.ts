import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './enrollcourse/enroll.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path : '' , component : LoginComponent},
{path : 'dashboard' , component : DashboardComponent},
{path : 'register' , component : RegistrationComponent}  ,
{path : 'course' , component : CourseComponent},
{path : 'enroll' , component : EnrollComponent},
{path : 'view', component : ViewcourseComponent},
{path : 'profile' , component : ProfileComponent},
{path : 'home' , component : HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
