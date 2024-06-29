import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResults } from '../model/IResults';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {


  constructor(private _HttpClient:HttpClient) { }

  getAllResults():Observable<IResults[]>{
    return this._HttpClient.get<IResults[]>('quiz/result')
  }

  
}
