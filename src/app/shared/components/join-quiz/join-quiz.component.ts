import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentQuizService } from 'src/app/features/student/quiz/services/student-quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
  styleUrls: ['./join-quiz.component.scss']
})
export class JoinQuizComponent {

  _id! :string;
  code: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<JoinQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _StudentQuiz: StudentQuizService, 
    private _ToastrService: ToastrService,
    private Router: Router
  ){}

  joinQuiz() {
    this._StudentQuiz.joinQuiz(this.code.value).subscribe({
      next: (res)=>{
        this._id = res.data.quiz;
        this._ToastrService.success('Joined Successfully');
      },
      error: (err) => {
        this._ToastrService.error(err.error.message, "Error")
      }, complete: () => {
        this.dialogRef.close();
        this.Router.navigate([`/student/quiz/${this._id}`])
      }
    })
  }

}
