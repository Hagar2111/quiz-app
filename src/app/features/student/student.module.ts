import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideBarStudentComponent } from './components/side-bar-student/side-bar-student.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';


@NgModule({
  declarations: [
    StudentComponent,
    SideBarStudentComponent,
    QuizQuestionsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
