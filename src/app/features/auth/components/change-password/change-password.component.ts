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
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  
  hidePassword:boolean=true;
  hideConfirmPassword:boolean = true;

  
  
  constructor(
    private _AuthService:AuthService,
   private _Router:Router,
    private _ToastrService: ToastrService,
   ){}
  

  changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),

    password_new: new FormControl(null, [Validators.required,Validators.pattern(/^.{3,}$/)]),
    
    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator.bind(this),
    ]),
    
  })

  // Password and confirm password Match Function
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const confirmPassword = control.value;
    const password = this.changePasswordForm?.get('password_new')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

  
  sendChangedPassowrd(): void {

    const { confirmPassword, ...data } = this.changePasswordForm.value;


    if(this.changePasswordForm.valid){
      this._AuthService.changePassword(data).subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:(err:HttpErrorResponse)=>{
          this._ToastrService.error(err.error.message, "Error")
        },
        complete:()=>{
          this._ToastrService.info('Password changed successfully');
          this._Router.navigate(["/auth"]);
        }
      })
    }
  }
}
