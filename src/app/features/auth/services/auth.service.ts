import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { IRegisterResponse } from '../models/IRegister';
import { IChangePassword, IChangePasswordResponse } from '../models/IChangePassword';
import { IForgotPasswordResponse } from '../models/IForgotPassword';
import { ILogin, ILogoutRes, IUpdateProfileReq, IUpdateProfileRes } from '../models/ilogin';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedInUserSubject = new BehaviorSubject<ILogin>({
    data: {
      accessToken: '',
      profile: {
        _id: '',
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        status: '',
      },
      refreshToken: '',
    },
    message: '',
  });

  loggedInUser$ = this.loggedInUserSubject.asObservable();


  constructor(private _HttpClient: HttpClient) { }

  
  getLoggedInUser(userData: ILogin): void {
    //  console.log('Emitting loggedInUser data:', userData);
      this.loggedInUserSubject.next(userData);
      //console.log('Current loggedInUserSubject value:', this.loggedInUserSubject.value);
  
    }
  

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


logout(): Observable<ILogoutRes> {
  return this._HttpClient.get<ILogoutRes>('auth/logout')
}


updateProfile(data: IUpdateProfileReq): Observable<IUpdateProfileRes> {
  return this._HttpClient.put<IUpdateProfileRes>('instructor', data)
}


}
