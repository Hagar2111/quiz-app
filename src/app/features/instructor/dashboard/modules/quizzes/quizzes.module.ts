import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizDetailsComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ]
})
export class QuizzesModule { }
