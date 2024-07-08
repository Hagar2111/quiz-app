import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    SharedModule
  ]
})
export class ResultModule { }
