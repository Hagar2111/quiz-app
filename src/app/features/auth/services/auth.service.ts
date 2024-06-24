import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IRegisterResponse } from '../models/IRegister';
import { ILogin } from '../models/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }


register(data:FormGroup):Observable<IRegisterResponse>{
  return this._HttpClient.post<IRegisterResponse>('auth/register',data)
}

login(data: FormGroup):Observable<ILogin>{
  return this._HttpClient.post<ILogin>('auth/login', data)
}


}
