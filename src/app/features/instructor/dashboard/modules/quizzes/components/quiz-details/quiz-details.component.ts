import { Component } from '@angular/core';
import { QuezzesService } from '../../services/quezzes.service';
import { IUpdateQuiz, IquizDetails } from '../../models/IQuizzes';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEditQuizzComponent } from '../add-edit-quizz/add-edit-quizz.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent {

  idParam:string ="";
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
    closed_at:'',
  }

  constructor(
    private _QuezzesService:QuezzesService,
    private _ToastrService:ToastrService,
    private _ActivatedRoute:ActivatedRoute,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.idParam = this._ActivatedRoute.snapshot.params['id'];
    // this.gitQuizDetails('667b73a7c85f1ecdbc26bc03');
    this.gitQuizDetails();
    
  }

  gitQuizDetails(){
    this._QuezzesService.getQuizById(this.idParam).subscribe({
      next:(res) =>{
        this.quisDetails = res;
      },
      error:(err:HttpErrorResponse)=>{
        this._ToastrService.error(err.error.message);
      }
    })
  }

  openUpdateDailog(enterAnimationDuration: string, 
    exitAnimationDuration: string,
    id: string ,title:string, description:string
): void {

    const dialogRef = this.dialog.open(AddEditQuizzComponent, {
      
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        id: id,
        title:title,
        description:description

      }
    });
    dialogRef.afterClosed().subscribe(result => {
    console.log(result)
      if (result) {
        this.editQuiz(id ,result)
      }

    });
  }

  editQuiz(id:string, data:IUpdateQuiz){
    this._QuezzesService.updateQuiz(id, data).subscribe({
      next: (res) =>{},
      error:(err) => {
        this._ToastrService.error(err.error.message)
      },
      complete:() => {
        this._ToastrService.success('Quiz updated successfully');
      },
    })
  }
}
