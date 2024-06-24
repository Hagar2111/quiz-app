import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../../models/ilogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hidePassword:boolean=true;

  loginResponse!: ILogin;

  loginForm:FormGroup= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^.{3,}$/)])
  })

  constructor(
    private _AuthService:AuthService,
    private _ToastrService:ToastrService,
    private _Router:Router
  ){}

  login():void{
    if(this.loginForm.valid){
      this._AuthService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          this.loginResponse = res
          this._ToastrService.success(res.message)
        },
        error:(err)=>{
          this._ToastrService.error(err.error.message)
        },
        complete: ()=>{
          if(this.loginResponse.data.profile.role === "Instructor"){
            this._Router.navigate(['/instructor/dashboard'])
          } else if(this.loginResponse.data.profile.role === ''){

          }
        }
      })
    }
  }

}
