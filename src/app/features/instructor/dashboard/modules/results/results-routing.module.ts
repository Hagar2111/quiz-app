import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';
import { ResultViewComponent } from './components/result-view/result-view.component';

const routes: Routes = [
  { path: '', component: ResultsComponent},
  { path: 'result-view', component: ResultViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
