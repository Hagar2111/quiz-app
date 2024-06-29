import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from '../models/iquestions';
import { FormGroup } from '@angular/forms';
import { ICreateQuestion } from '../models/icreate-question';
import { ICurrentQuestion } from '../models/icurrent-question';
import { IUpdateQuestion } from '../models/iupdate-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllQuestions():Observable<IQuestion[]>{
    return this._HttpClient.get<IQuestion[]>('question')
  }

  createNewQuestion(data: FormGroup):Observable<ICreateQuestion>{
    return this._HttpClient.post<ICreateQuestion>('question',data)
  }

  getQuestionById(id: string):Observable<ICurrentQuestion>{
    return this._HttpClient.get<ICurrentQuestion>(`question/${id}`)
  }

  updateQuestion(id: string, data: FormGroup):Observable<IUpdateQuestion>{
    return this._HttpClient.put<IUpdateQuestion>(`question/${id}`, data)
  }

  deleteQuestion(id: string):Observable<any>{
    return this._HttpClient.delete(`question/${id}`)
  }

}
