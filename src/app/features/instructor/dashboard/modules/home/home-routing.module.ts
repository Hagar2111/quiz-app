import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { QuizDetailsComponent } from '../quizzes/components/quiz-details/quiz-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz-details/:id', component: QuizDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
