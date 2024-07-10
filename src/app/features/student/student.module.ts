import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideBarStudentComponent } from './components/side-bar-student/side-bar-student.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { HomeComponent } from './home/home.component';
import { DisplayResultComponent } from './components/display-result/display-result.component';


@NgModule({
  declarations: [
    StudentComponent,
    SideBarStudentComponent,
    QuizQuestionsComponent,
    DisplayResultComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
