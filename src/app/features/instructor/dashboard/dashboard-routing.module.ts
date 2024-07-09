import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'groups', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule) },
      { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) },
      { path: 'quizzes', loadChildren: () => import('./modules/quizzes/quizzes.module').then(m => m.QuizzesModule), },
      { path: 'results', loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
