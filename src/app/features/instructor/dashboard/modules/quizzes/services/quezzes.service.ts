import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IQuiz,IQuizResponse, IquizDetails } from '../models/IQuizzes';

@Injectable({
  providedIn: 'root'
})
export class QuezzesService {

constructor(private _HttpClient:HttpClient) { }


onAddQuiz(data:FormData):Observable<IQuizResponse>{
  return this._HttpClient.post<IQuizResponse>('quiz', data)
}

getQuizById(id:string):Observable<IquizDetails>{
  return this._HttpClient.get<IquizDetails>(`quiz/${id}`);
}

}
