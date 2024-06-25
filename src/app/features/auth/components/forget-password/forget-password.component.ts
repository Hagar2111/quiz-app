import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  
  hidePassword:boolean=true;
  hideConfirmPassword:boolean = true;


  forgotForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
  })


constructor(
  private _AuthService:AuthService,
  private _Router:Router,
  private _ToastrService: ToastrService,
 ){}

 
 sendRequestForm():void{

  if(this.forgotForm.valid){


  this._AuthService.forgotPassword(this.forgotForm.value).subscribe({
    next:(response)=>{
     console.log(response)
    this._ToastrService.success(response.message)
    },
    error:(err:HttpErrorResponse)=>{
      this._ToastrService.error(err.error.message, "Error")
    },
    complete:()=>{
      this._Router.navigate(['/auth/login'])
    }
  })
}
}


}
