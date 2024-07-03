import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllQuiz, AllResult } from '../models/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private _HttpClient:HttpClient) { }

get5IncomingQuiz(): Observable<AllQuiz>{
  return this._HttpClient.get<AllQuiz>("quiz/incomming");
}
getLast5CompletedQuiz(): Observable<AllQuiz>{
  return this._HttpClient.get<AllQuiz>("quiz/completed");
}

getAllResult(): Observable<AllResult>{
  return this._HttpClient.get<AllResult>("quiz/result");
}

}
