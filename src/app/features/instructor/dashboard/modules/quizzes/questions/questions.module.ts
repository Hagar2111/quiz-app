import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditQuestionComponent } from './components/add-edit-question/add-edit-question.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    AddEditQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    SharedModule
  ]
})
export class QuestionsModule { }
