import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuiz } from 'src/app/core/models/IQuiz.model';
import { IStudent } from 'src/app/core/models/IStudent.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HtttpClient: HttpClient) { }

  getTop5Students(): Observable<IStudent[]>{
    return this._HtttpClient.get<IStudent[]>("student/top-five");
  }

  getIncomingQuiz(): Observable<IQuiz[]>{
    return this._HtttpClient.get<IQuiz[]>("quiz/incomming");
  }
}
