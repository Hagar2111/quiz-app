import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { NoFoundPageComponent } from 'src/app/shared/components/no-found-page/no-found-page.component';

const routes: Routes = [
  {
    path: '', component: StudentComponent, children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) , title: 'Home'}, 
      { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule), title: 'Quiz' }, 
      { path: 'result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) , title: 'Result' }, 


      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
