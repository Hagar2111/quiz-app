import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllGroups } from '../models/iall-groups';
import { IAddUpdatedDeleteGroupRes, IGroup, IUpdateOrAddGroup } from 'src/app/core/models/IGroup.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllGroups():Observable<IAllGroups[]>{
    return this._HttpClient.get<IAllGroups[]>('group')
  }



  getGroupById(id:string):Observable<IGroup>{
    return this._HttpClient.get<IGroup>(`group/${id}`)
  }

 AddNewGreoup(addNewGroup:IUpdateOrAddGroup):Observable<IAddUpdatedDeleteGroupRes>{
    return this._HttpClient.post<IAddUpdatedDeleteGroupRes>(`group`,addNewGroup)
  }
  
  editGroup(id:string, editData:IUpdateOrAddGroup):Observable<IAddUpdatedDeleteGroupRes>{
    return this._HttpClient.put<IAddUpdatedDeleteGroupRes>(`group/${id}`,editData)
  }
 

  deleteGroup(id:string):Observable<IAddUpdatedDeleteGroupRes>{
    return this._HttpClient.delete<IAddUpdatedDeleteGroupRes>(`group/${id}`)
  }

}
