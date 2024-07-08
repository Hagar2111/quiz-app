import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentGuard } from './core/guards/student.guard';
import { intructorGuard } from './core/guards/intructor.guard';
import { NoFoundPageComponent } from './shared/components/no-found-page/no-found-page.component';

const routes: Routes = [
  {path:'', redirectTo: 'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) , title: 'Login' }, 
  { path: 'student', canActivate:[studentGuard], loadChildren: () => import('./features/student/student.module').then(m => m.StudentModule) , title: 'Student'} , 
  { path: 'instructor', canActivate:[intructorGuard], loadChildren: () => import('./features/instructor/instructor.module').then(m => m.InstructorModule) , title: 'Instructor'},
  {path: '**' , component: NoFoundPageComponent , title: 'Error 404!'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
