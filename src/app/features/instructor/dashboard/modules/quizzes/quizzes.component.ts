import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuezzesService } from './services/quezzes.service';
import { AddEditQuizzComponent } from './components/add-edit-quizz/add-edit-quizz.component';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  constructor(
    private QuezzesService:QuezzesService,
    public dialog: MatDialog
  ){}

  openAddEditDialog(id?:string,view?:boolean): void {
    const dialogRef = this.dialog.open(AddEditQuizzComponent, {
      
      data: {    }
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The dialog was closed');
      
    });
  }


}
