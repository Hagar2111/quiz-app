import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
  
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'login', loadComponent: () => import('../auth/components/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('../auth/components/register/register.component').then(m => m.RegisterComponent) },
  { path: 'forgetPassword', loadComponent: () => import('../auth/components/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent) },
  { path: 'reset-password', loadComponent: () => import('../auth/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
  { path: 'changePassword', loadComponent: () => import('../auth/components/change-password/change-password.component').then(m => m.ChangePasswordComponent) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
