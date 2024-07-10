import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuizQuestionsComponent } from '../components/quiz-questions/quiz-questions.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: ':id', component: QuizQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
