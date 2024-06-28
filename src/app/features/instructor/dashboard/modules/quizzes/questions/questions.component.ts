import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './sevices/questions.service';
import { IQuestion } from './models/iquestions';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddEditQuestionComponent } from './components/add-edit-question/add-edit-question.component';

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

  openAddEditDialog(id?:string): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllQuestions()
    });
  }
}
