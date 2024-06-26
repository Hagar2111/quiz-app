import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllGroups } from '../models/iall-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllGroups():Observable<IAllGroups[]>{
    return this._HttpClient.get<IAllGroups[]>('group')
  }
}
