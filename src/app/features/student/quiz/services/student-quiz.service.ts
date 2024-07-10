import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/core/models/IGeneralResponse';
import { IQuiz } from 'src/app/core/models/IQuiz.model';
import { IAnswer } from '../../models/IAnswer';
import { IQuizResult } from '../../models/IQuizResult';
import { IQuizJoin } from '../../models/IQuizJoin';

@Injectable({
  providedIn: 'root'
})
export class StudentQuizService {

  constructor(private _httpClient: HttpClient) { }

  joinQuiz(code: string): Observable<IResponse<IQuizJoin>> {
    return this._httpClient.post<IResponse<IQuizJoin>>("quiz/join", { code });
  }

  getQuizQuestion(id: string): Observable<IResponse<IQuiz>>{
    return this._httpClient.get<IResponse<IQuiz>>(`quiz/without-answers/${id}`);
  }

  submitQuiz(id: string, answers: IAnswer[]): Observable<IResponse<IQuizResult>>{
    return this._httpClient.post<IResponse<IQuizResult>>(`quiz/submit/${id}`, { answers: answers });
  }
}
