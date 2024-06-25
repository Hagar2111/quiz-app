import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { IStudent } from 'src/app/core/models/IStudent.model';
import { ToastrService } from 'ngx-toastr';
import { IQuiz } from 'src/app/core/models/IQuiz.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  topStudents: IStudent[] = [];
  incommingQuiz: IQuiz[] = [];

  constructor(private _HomeService: HomeService, private _ToastrService: ToastrService){}

  ngOnInit(): void {
    this.getLookups();
  }

  getLookups(){
    this._HomeService.getTop5Students().subscribe({
      next: (res)=>{
        this.topStudents = res;
      },
      error: (err)=>{
        this._ToastrService.error(err.error.message);
      }
    })

    this._HomeService.getIncomingQuiz().subscribe({
      next: (res)=>{
        this.incommingQuiz = res;
      },
      error: (err)=>{
        this._ToastrService.error(err.error.message);
      }
    })
  }

}
