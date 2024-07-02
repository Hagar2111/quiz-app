import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuezzesService } from './services/quezzes.service';
import { AddEditQuizzComponent } from './components/add-edit-quizz/add-edit-quizz.component';
import { HomeService } from '../home/services/home.service';
import { forkJoin, map, switchMap } from 'rxjs';
import { group } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { IQuizStudents } from 'src/app/core/models/IQuiz.model';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit{
  incommingQuiz: IQuizStudents[] = [];

  constructor(
    private QuezzesService:QuezzesService,
    private _HomeService: HomeService,
    public dialog: MatDialog, private _ToastrService: ToastrService
  ){}
  ngOnInit(): void {
    this.getIncomingQuiz()
  }




  getIncomingQuiz(): void {
    this._HomeService.getIncomingQuiz().pipe(
      switchMap(quizzes => {
        const quizObservables = quizzes.map(quiz => {
          return this._HomeService.getGroupById(quiz.group).pipe(
            map(group => ({
              ...quiz,
              studentsEnrolled: group.students.length
            }))
          );
        });
        return forkJoin(quizObservables);
      })
    ).subscribe({
      next: (res) => {
        this.incommingQuiz = res;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    });
  }

}
