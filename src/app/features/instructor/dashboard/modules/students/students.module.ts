import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddEditStudentsComponent } from './components/add-edit-students/add-edit-students.component';


@NgModule({
  declarations: [
    StudentsComponent,
    AddEditStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
