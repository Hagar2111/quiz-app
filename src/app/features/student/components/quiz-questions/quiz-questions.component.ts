import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz } from 'src/app/core/models/IQuiz.model';
import { StudentQuizService } from '../../quiz/services/student-quiz.service';
import { ToastrService } from 'ngx-toastr';
import { IOptionKeys, IQuestion } from 'src/app/core/models/IQuestion.model';
import { KeyValue } from '@angular/common';
import { IAnswer, Nullable } from '../../models/IAnswer';
import { IQuizResult } from '../../models/IQuizResult';
import { MatDialog } from '@angular/material/dialog';
import { DisplayResultComponent } from '../display-result/display-result.component';


type IFlags = "Completed" | "Uncertain" | "Active" | "NotTouched";

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  _id!: string | null;
  quiz!: IQuiz;
  questions: IQuestion[] = [];
  answers: Nullable<IAnswer>[] = [];
  // answers!: {[key: string]: IOptionKeys};
  questionFlags: { [key: string]: IFlags } = {};
  isInvalid: number = -1;
  result!: IQuizResult;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _StudentQuiz: StudentQuizService,
    private _ToastrService: ToastrService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._id = this._ActivatedRoute.snapshot.paramMap.get("id");
    this.getQuiz();
  }

  getQuiz() {
    this._StudentQuiz.getQuizQuestion(this._id as string).subscribe({
      next: (res) => {
        this.quiz = res.data;
        this.questions = res.data.questions;
        // this.questionsControls.fill(new FormControl(null, [Validators.required]))
      },
      error: (err) => {
        this._ToastrService.error(err.error.message, "Error")
      },
      complete: () => {
        this.buildData();
      }

    })
  }

  buildData() {
    this.isInvalid = this.questions.length;
    for (let question of this.questions) {
      this.questionFlags[question._id] = "NotTouched";
      this.answers.push({
        question: question._id,
        answer: null
      })
    }
  }

  submitQuiz() {
    if (!this.checkValidation()) {
      this._StudentQuiz.submitQuiz(this.quiz._id, this.answers as IAnswer[]).subscribe({
        next: (res) => {
          this.result = res.data;
          this._ToastrService.success('Submited Successfully');
        },
        error: (err) => {
          this._ToastrService.error(err.error.message, "Error")
        }, complete: () => {
          this.isInvalid = -1;
          this.openResultDialog();
        }
      })
    }
  }

  openResultDialog() {
    this._dialog.open(DisplayResultComponent, { 
      data: { 
      ...this.result, 
      totalScore: this.quiz.score_per_question * this.quiz.questions_number, 
      questionScore: this.quiz.score_per_question 
    } })
  }

  changeQuestionFlag(_id: string, flag: IFlags) {
    if (this.questionFlags[_id] !== flag) {
      if (flag === "Uncertain" && this.questionFlags[_id] !== "Completed") return;
      this.questionFlags[_id] = flag;
      if (flag === "Completed") --this.isInvalid;
      else ++this.isInvalid;
    }
  }

  checkValidation() {
    return Boolean(this.isInvalid);
  }

  isRightAnswer(index: number, key: IOptionKeys) {
    if (!this.result) return false;
    if (this.result.questions.length !== this.quiz.questions.length) return false;
    if (this.result.questions.length !== this.answers.length) return false;
    return this.result.questions[index].answer === key;
  }

  onCompare(_left: KeyValue<IOptionKeys & "_id", string>, _right: KeyValue<IOptionKeys & "_id", string>): number {
    return -1
  }
}
