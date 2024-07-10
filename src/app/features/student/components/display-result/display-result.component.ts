import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IQuizResult } from '../../models/IQuizResult';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.scss']
})
export class DisplayResultComponent {

  constructor(
    public dialogRef: MatDialogRef<DisplayResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IQuizResult & {totalScore: number, questionScore: number},
  ){}

}
