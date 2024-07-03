import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IQuiz,IQuizResponse, IUpdateQuiz, IquizDetails } from '../models/IQuizzes';

@Injectable({
  providedIn: 'root'
})
export class QuezzesService {

constructor(private _HttpClient:HttpClient) { }


onAddQuiz(data:FormData):Observable<any>{
  return this._HttpClient.post('quiz', data)
}

getQuizById(id:string):Observable<IquizDetails>{
  return this._HttpClient.get<IquizDetails>(`quiz/${id}`);
}


updateQuiz(id:string , updateQuizData:IUpdateQuiz):Observable<IQuizResponse>{
  return this._HttpClient.put<IQuizResponse>(`quiz/${id}` ,updateQuizData)
}


getAllQuiz():Observable<IquizDetails[]>{
  return this._HttpClient.get<IquizDetails[]>(`quiz`);


}


}
