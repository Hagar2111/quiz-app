import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';
import { NoFoundPageComponent } from 'src/app/shared/components/no-found-page/no-found-page.component';

const routes: Routes = [
  { path: '', component: InstructorComponent }, 
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)  },
  {path: '**' , component: NoFoundPageComponent , title: 'Error 404!'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
