import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { AllQuiz } from '../models/IStudent';
import { ToastrService } from 'ngx-toastr';
import { forkJoin, map, switchMap } from 'rxjs';
import { HomeService } from '../../instructor/dashboard/modules/home/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

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
