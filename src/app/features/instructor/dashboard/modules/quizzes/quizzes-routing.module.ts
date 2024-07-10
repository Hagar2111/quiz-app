import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { ListQuizComponent } from './components/list-quiz/list-quiz.component';
import { NoFoundPageComponent } from 'src/app/shared/components/no-found-page/no-found-page.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent },
  { path: 'quiz-details/:id', component: QuizDetailsComponent , title: 'Quiz details'},
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule), title: 'Questions'},
  {path:'listQuiz',component:ListQuizComponent , title: 'List Quiz'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
