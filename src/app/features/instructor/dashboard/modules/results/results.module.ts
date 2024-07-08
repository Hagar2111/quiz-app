import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { ResultViewComponent } from './components/result-view/result-view.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ResultsComponent,
    ResultViewComponent,
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ResultsModule { }
