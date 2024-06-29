import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './sevices/questions.service';
import { IQuestion } from './models/iquestions';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddEditQuestionComponent } from './components/add-edit-question/add-edit-question.component';
import { ToastrService } from 'ngx-toastr';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{

  questionsList: IQuestion[] = []

  constructor(
    private _QuestionsService:QuestionsService,
    public dialog: MatDialog
    ,private _ToastrService:ToastrService
  ){}

  ngOnInit(): void {
    this.getAllQuestions()
  }

  getAllQuestions():void{
    this._QuestionsService.getAllQuestions().subscribe({
      next: (res)=>{
        this.questionsList = res
        console.log(this.questionsList);
      }
    })
  }

  openAddEditDialog(id?:string,view?:boolean): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      
      data: {
        id: id,
        view: view,

      }    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllQuestions()
    });
  }


  deleteQuestion(id:string):void{
    this._QuestionsService.deleteQuestion(id).subscribe({
      next: (res) => {
        // console.log(res)
        this._ToastrService.success(res.message)

      },
      error: (err) => {
        this._ToastrService.error(err.error.message)


      },
      complete: () => {
        this.getAllQuestions();
      }

    })
  }

  openDeleteDialog(id:string,itname:string,componentName:string): void {
    const dialo =this.dialog.open(DeletePopupComponent, {
      width: '500px',

      data:{
        comp:componentName,
        id:id,
        name:itname
      }
    });
    dialo.afterClosed().subscribe(res=>{
      if(res){
       this.deleteQuestion(res)
      }
    })
  }
}
