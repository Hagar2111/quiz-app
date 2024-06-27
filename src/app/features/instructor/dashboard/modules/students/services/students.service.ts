import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from 'src/app/core/models/IStudent.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllStudents(): Observable<IStudent[]>{
    return this._HttpClient.get<IStudent[]>("student");
  }

  getStudentsWithoutGroup(): Observable<IStudent[]>{
    return this._HttpClient.get<IStudent[]>("student/without-group");
  }

  addToGroup(){
    
  }
}
