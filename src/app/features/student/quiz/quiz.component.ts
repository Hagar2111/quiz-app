import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../instructor/dashboard/modules/home/services/home.service';
import { AllQuiz } from '../models/IStudent';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{

  incommingQuiz:AllQuiz=[]
  completedQuiz:AllQuiz=[]



  constructor(private _StudentService:StudentService,private _ToastrService:ToastrService,private _HomeService:HomeService){}

  ngOnInit(): void {

    this.get5IncommingQuiz()
    this.get5CompletedQuiz()
    
  }

  get5IncommingQuiz(): void {
    this._StudentService.get5IncomingQuiz().subscribe({
      next: (res) => {
        this.incommingQuiz = res;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    })
  }

  get5CompletedQuiz(): void {
    this._StudentService.getLast5CompletedQuiz().subscribe({
      next: (res) => {
        this.completedQuiz = res;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    })
  }




}



