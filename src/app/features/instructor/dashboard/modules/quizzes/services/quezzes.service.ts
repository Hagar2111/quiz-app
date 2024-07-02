import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IQuiz,IQuizResponse } from '../models/IQuizzes';

@Injectable({
  providedIn: 'root'
})
export class QuezzesService {

constructor(private _HttpClient:HttpClient) { }


onAddQuiz(data:FormData):Observable<any>{
  return this._HttpClient.post('quiz', data)
}

}
