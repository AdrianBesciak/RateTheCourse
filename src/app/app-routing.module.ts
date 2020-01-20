import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AdminsCockpitComponent } from './components/admins-cockpit/admins-cockpit.component';


const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'signIn', component: RegisterComponent},
  {path: 'register', component: SignInComponent},
  {path: 'course/:id', component: CourseDetailsComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'adminsCockpit', component: AdminsCockpitComponent},
  {path: '**', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
