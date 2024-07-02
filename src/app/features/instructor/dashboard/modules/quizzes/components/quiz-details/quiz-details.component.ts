import { Component } from '@angular/core';
import { QuezzesService } from '../../services/quezzes.service';
import { IquizDetails } from '../../models/IQuizzes';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent {

  // extractedTime:string ='';
  quisDetails:IquizDetails ={
    _id:'',
    code:'',
    title:'',
    description:'',
    status:'',
    instructor:'',
    group:'',
    questions_number:0,
    questions: [],
    schadule:'',
    duration:0,
    score_per_question:0,
    type:'',
    difficulty:'',
    updatedAt:'',
    createdAt:'',
    __v:0,
    closed_at:''
  }

  constructor(
    private _QuezzesService:QuezzesService,
    private _ToastrService:ToastrService
  ){}

  ngOnInit(): void {
    this.gitQuizDetails('667b73a7c85f1ecdbc26bc03');
    
  }

  gitQuizDetails(quizId:string){
    this._QuezzesService.getQuizById(quizId).subscribe({
      next:(res) =>{
        this.quisDetails = res;
      },
      error:(err:HttpErrorResponse)=>{
        this._ToastrService.error(err.error.message);
      }
    })
  }
}
