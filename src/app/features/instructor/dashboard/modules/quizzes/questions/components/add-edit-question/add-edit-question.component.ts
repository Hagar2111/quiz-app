import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionsService } from '../../sevices/questions.service';
import { ToastrService } from 'ngx-toastr';
import { ICurrentQuestion } from '../../models/icurrent-question';

@Component({
  selector: 'app-add-edit-question',
  templateUrl: './add-edit-question.component.html',
  styleUrls: ['./add-edit-question.component.scss']
})
export class AddEditQuestionComponent implements OnInit{

  header: string = ''
  quesId:string= ''
  currentQuestion: ICurrentQuestion={
    _id: '',
    title: '',
    description: '',
    options: {
      A: '',
      B: '',
      C: '',
      D: '',
      _id: '',
    },
    answer: '',
    status: '',
    instructor: '',
    difficulty: '',
    points: 0,
    type: '',  }

    questionForm:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _QuestionsService:QuestionsService,
    private _ToastrService:ToastrService
  ){
    this.questionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      options: new FormGroup({
        A: new FormControl('', Validators.required),
        B: new FormControl('', Validators.required),
        C: new FormControl('', Validators.required),
        D: new FormControl('', Validators.required),
      }),
      answer: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    })
  }


  ngOnInit(): void {

    if(this.data.id){
      this.quesId=this.data.id
      console.log(this.data.id)
      this.header = 'Update question'
      this.getCurrentQues()

      if(this.data.view){
        this.header = 'View question'
        this.questionForm.disable();


      }
    }else{
      this.header = 'Set up a new question'
    }
  }

  getCurrentQues():void{
    console.log('getCurrentQues')

    this._QuestionsService.getQuestionById(this.quesId).subscribe({
      next: (res)=>{
        this.currentQuestion = res
      },error: (err)=>{

        console.log(err)
        console.log('errr')

      },
      complete:()=>{
        console.log('patch')
        this.questionForm.patchValue({
          title: this.currentQuestion.title,
          description: this.currentQuestion.description,
          options: {
            A: this.currentQuestion.options.A,
            B: this.currentQuestion.options.B,
            C: this.currentQuestion.options.C,
            D: this.currentQuestion.options.D
          },
          answer: this.currentQuestion.answer,
          difficulty: this.currentQuestion.difficulty,
          type: this.currentQuestion.type
        })
      }
    })
  }





  sendQuesData():void{
    if(this.questionForm.valid){
      if(this.data.id){
        this._QuestionsService.updateQuestion(this.quesId, this.questionForm.value).subscribe({
          next: (res)=>{
            console.log(res)
            this._ToastrService.success(res.message)
          },error: (err)=>{
            this._ToastrService.error(err.error.message)
          },
          complete:()=>{
            this.onNoClick()
          }
        })
      }else{
        this._QuestionsService.createNewQuestion(this.questionForm.value).subscribe({
          next: (res)=>{
            this._ToastrService.success(res.message)
          },error:(err)=>{
            this._ToastrService.error(err.error.message)
          },complete:()=>{
            this.onNoClick()
          }
        })
      }
    }

  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}
