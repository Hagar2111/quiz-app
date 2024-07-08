import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NoFoundPageComponent } from 'src/app/shared/components/no-found-page/no-found-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path:'',redirectTo:'home',pathMatch:'full'},

      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) , title: 'Home' },
      { path: 'groups', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule), title: 'Groups' },
      { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule), title: 'Students' },
      { path: 'quizzes', loadChildren: () => import('./modules/quizzes/quizzes.module').then(m => m.QuizzesModule) , title: 'Quiz'},
      { path: 'results', loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule) , title: 'Result' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
