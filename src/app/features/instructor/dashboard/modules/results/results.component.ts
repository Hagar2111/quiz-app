import { Component } from '@angular/core';
import { ResultsService } from './services/results.service';
import { IQuizGroup, IResults } from './model/IResults';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from '../groups/services/groups.service';
import { IAllGroups} from '../groups/models/iall-groups';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  
  allResults: IQuizGroup[]=[];
  allGroups: IAllGroups[]=[];
  allTableData:any[]=[]

  constructor(
    private _ResultsService:ResultsService,
    private _GroupsService:GroupsService,
    private _ToastrService:ToastrService
  ){
    this.getResults();
    // this.getGroupDetails();
  }
  
  

  // getResults(){
  //   this._ResultsService.getAllResults().subscribe({
  //     next:(res) => {
  //       this.allResults = res;
  //       console.log(this.allResults);
  //     },
  //     error:(err:HttpErrorResponse)=>{
  //       this._ToastrService.error(err.error.message);
  //     }
  //   })
  // }

  

  // getGroupDetails(){
  //   this._GroupsService.getAllGroups().subscribe({
  //     next:(res) => {
  //       this.allGroups = res;
  //       console.log(this.allGroups);
  //     },
  //     error:(err:HttpErrorResponse) => {
  //       this._ToastrService.error(err.error.message);
  //     }
  //   })
  // }

  
  getResults(): void {
    this._ResultsService.getAllResults().pipe(
      switchMap(quizzes => {
        const quizObservables = quizzes.map(quiz => {
          return this._GroupsService.getGroupById(quiz.quiz.group).pipe(
            map(group => ({
              ...quiz,
              groupName: group.name,
              studentsEnrolled: group.students.length
            }))
          );
        });
        return forkJoin(quizObservables);
      })
    ).subscribe({
      next: (res) => {
        this.allResults = res;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    });
  }
 
}
