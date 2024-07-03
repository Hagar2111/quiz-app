import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { ListQuizComponent } from './components/list-quiz/list-quiz.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent },
  { path: 'quiz-details/:id', component: QuizDetailsComponent },
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)},
  {path:'listQuiz',component:ListQuizComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
