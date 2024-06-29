import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditViewStudentComponent } from './compontents/add-edit-view-student/add-edit-view-student.component';


@NgModule({
  declarations: [
    StudentsComponent,
    AddEditViewStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
