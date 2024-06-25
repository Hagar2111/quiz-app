import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IRegisterResponse } from '../models/IRegister';
import { IChangePassword, IChangePasswordResponse } from '../models/IChangePassword';
import { IForgotPasswordResponse } from '../models/IForgotPassword';
import { ILogin } from '../models/ilogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }


  register(data: FormGroup): Observable<IRegisterResponse> {
    return this._HttpClient.post<IRegisterResponse>('auth/register', data)
  }


  reset(data: FormGroup): Observable<any> {
    return this._HttpClient.post<IRegisterResponse>('auth/reset-password', data)
  }

login(data: FormGroup):Observable<ILogin>{
  return this._HttpClient.post<ILogin>('auth/login', data)
}


changePassword(passwordData: IChangePassword): Observable<IChangePasswordResponse> {
  return this._HttpClient.post<IChangePasswordResponse>('auth/change-password', passwordData)
}

forgotPassword(requestEmail: string):  Observable<IForgotPasswordResponse>{
  return this._HttpClient.post<IForgotPasswordResponse>('auth/forgot-password', requestEmail)
}

}
