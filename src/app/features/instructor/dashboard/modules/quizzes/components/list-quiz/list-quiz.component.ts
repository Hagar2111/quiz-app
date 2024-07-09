import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuezzesService } from '../../services/quezzes.service';
import { IquizDetails, allQuizzes } from '../../models/IQuizzes';
import { AddEditQuizzComponent } from '../add-edit-quizz/add-edit-quizz.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit{

  allQuiz:allQuizzes=[]

  constructor(
    private QuezzesService:QuezzesService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getAllQuiz()
  }

  getAllQuiz(){
    this.QuezzesService.getAllQuiz().subscribe({
      next:(res)=>{
        this.allQuiz=res
      },error:(err)=>{

      }
    })
  }


  openAddEditDialog(id?:string,view?:boolean): void {
    const dialogRef = this.dialog.open(AddEditQuizzComponent, {

      data: {  id  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result', result);

      if(result){
        this.getAllQuiz()
      }

    });
  }

}
