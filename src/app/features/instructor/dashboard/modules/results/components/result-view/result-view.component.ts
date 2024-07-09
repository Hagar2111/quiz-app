import { Component } from '@angular/core';
import { IStudent } from 'src/app/core/models/IGroup.model';
import { ToastrService } from 'ngx-toastr';
import { ResultsService } from '../../services/results.service';
import { IQuizGroup, IResults, IParticipant } from '../../model/IResults';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { IBreadCrumb } from 'src/app/shared/models/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent {

  viewID:string =''
  navigationList: IBreadCrumb[] = [
    { label: 'Results', url: '../../../../instructor/dashboard/results' },
    { label: 'View' }
  ]
  btnText: string = 'Dashboard';
  btnIcon: string = "";
  // quizData!:IQuizResponseByID;

  allResults: IResults[]=[];
  participants:IParticipant[] = [];

  constructor(
    private _ResultsService:ResultsService, 
    private _ToastrService:ToastrService,
    private _Router:Router
  ){}

  
  GoToDashBoard(){
    this._Router.navigateByUrl('/dashboard')
   }
   

  getAllParticipants() {
    this._ResultsService.getAllResults().subscribe({
      next: (res) => {
        this.allResults = res;
      // Extract participants from all quizzes
        this.participants = this.allResults.flatMap(result => result.participants);      
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    })
  }
  }
