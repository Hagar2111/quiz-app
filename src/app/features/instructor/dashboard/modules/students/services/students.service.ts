import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IMsg, IStudent, IStudentResAddToGroup, IStudentResponse, IStudentWithGroup } from 'src/app/core/models/IStudent.model';

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

  getStudentById(id:string): Observable<IStudentWithGroup>{
    return this._HttpClient.get<IStudentWithGroup>(`student/${id}`);
  }


  addStudentToGroup(idStudent:string,idGroup:string): Observable<IStudentResAddToGroup>{
    return this._HttpClient.get<IStudentResAddToGroup>(`student/${idStudent}/${idGroup}`);
  }

  updateStudentGroup(idStudent:string,idGroup:string,data:null): Observable<IStudentResAddToGroup>{
    return this._HttpClient.put<IStudentResAddToGroup>(`student/${idStudent}/${idGroup}`,data);
  }

  deleteStudentFromGroup(idStudent:string,idGroup:string): Observable<IMsg>{
    return this._HttpClient.delete<IMsg>(`student/${idStudent}/${idGroup}`);
  }

  deleteStudent(id:string): Observable<IStudentResponse>{
    return this._HttpClient.delete<IStudentResponse>(`student/${id}`);
  }
}
