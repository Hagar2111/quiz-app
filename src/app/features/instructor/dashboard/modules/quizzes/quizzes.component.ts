import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuezzesService } from './services/quezzes.service';

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

}
