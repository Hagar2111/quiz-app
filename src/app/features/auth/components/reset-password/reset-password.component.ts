import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule ,SharedModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  clickCount: number = 0;

  resetForm!: FormGroup;

  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    const Default_Validators = [Validators.required];
    const Email_Validators = [...Default_Validators, Validators.email];
    const Password_Validators = [...Default_Validators, Validators.pattern(/^.{3,}$/)];
    const Comfirm_Password_validators = [...Default_Validators, RxwebValidators.compare({ fieldName: 'password' })]

    this.resetForm = this._FormBuilder.group({
      email: ["", Email_Validators],
      password: ["", Password_Validators],
      confirmPassword: ['', Comfirm_Password_validators],
      otp: ["", Default_Validators],
    })
  }


  reset(): void {

    if (this.resetForm.valid) {

      const { confirmPassword, ...formValue } = this.resetForm.value;

      this._AuthService.reset(formValue).subscribe({
        next: (response) => {
          console.log(response)
          this._ToastrService.success(response.message)
        },
        error: (err) => {
          this._ToastrService.error(err.error.message)
        },
        complete: () => {
          this._Router.navigate(['/auth/login'])
        }
      })
    }
  }

}
