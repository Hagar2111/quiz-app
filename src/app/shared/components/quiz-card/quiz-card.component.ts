import { Component, Input } from '@angular/core';
import { IQuizStudents } from 'src/app/core/models/IQuiz.model';
import { IQuizRes } from 'src/app/features/student/models/IStudent';
import { JoinQuizComponent } from '../join-quiz/join-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {
  @Input() quiz!: IQuizStudents | IQuizRes;
  @Input() needJoin: boolean = false;

  constructor(private dialog: MatDialog, private Router: Router) { }

  openQuiz() {
    return this.needJoin ? this.onJoinQuiz() : this.routeToQuiz();
  }

  onJoinQuiz() {
    const dialogRef = this.dialog.open(JoinQuizComponent, { data: {code: this.quiz.code} });
  }

  routeToQuiz() {
    this.Router.navigate([`/instructor/dashboard/quiz/${this.quiz._id}`]);
  }

}
