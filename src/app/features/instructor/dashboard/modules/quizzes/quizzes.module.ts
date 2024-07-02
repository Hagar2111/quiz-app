import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';

import { AddEditQuizzComponent } from './components/add-edit-quizz/add-edit-quizz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaterialTimepickerButtonComponent } from 'ngx-material-timepicker/src/app/material-timepicker/components/timepicker-button/ngx-material-timepicker-button.component';
import { ResponseComponent } from './components/response/response.component';

import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';



@NgModule({
  declarations: [
    QuizzesComponent,

    AddEditQuizzComponent,
    ResponseComponent

    QuizDetailsComponent

  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ],
})
export class QuizzesModule { }
