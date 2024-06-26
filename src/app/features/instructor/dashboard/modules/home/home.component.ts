import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { IStudent } from 'src/app/core/models/IStudent.model';
import { ToastrService } from 'ngx-toastr';
import { IQuiz } from 'src/app/core/models/IQuiz.model';
import { IGroup } from 'src/app/core/models/IGroup.model';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  topStudents: IStudent[] = [];
  incommingQuiz: (IQuiz & { studentsEnrolled: number })[] = [];

  groupRes:IGroup={
    _id: "",
    name: "",
    status: "",
    instructor: "",
    max_students: 0,
    students: []

  }

  constructor(private _HomeService: HomeService, private _ToastrService: ToastrService){}

  ngOnInit(): void {
    this.getLookups();
  }

  getLookups(){
   
    this.getTop5Students()

    this.getIncomingQuiz()
  }


  getTop5Students():void{
    this._HomeService.getTop5Students().subscribe({
      next: (res)=>{
        this.topStudents = res;
      },
      error: (err)=>{
        this._ToastrService.error(err.error.message);
      }
    })


  }

  getIncomingQuiz(): void {
    this._HomeService.getIncomingQuiz().pipe(
      switchMap(quizzes => {
        const quizObservables = quizzes.map(quiz => {
          return this._HomeService.getGroupById(quiz.group).pipe(
            map(group => ({
              ...quiz,
              studentsEnrolled: group.students.length
            }))
          );
        });
        return forkJoin(quizObservables);
      })
    ).subscribe({
      next: (res) => {
        this.incommingQuiz = res;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    });
  }

 

}
