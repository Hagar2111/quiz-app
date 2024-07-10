import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule ,SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {





    hidePassword:boolean=true;
    hideConfirmPassword:boolean = true;
    clickCount: number = 0;


    registerForm:FormGroup=this._FormBuilder.group({
      first_name : new FormControl('',[Validators.required]),
      last_name: new FormControl('',[Validators.required]),

      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^.{3,}$/)]) ,//  password contains at least 3 characters long.
      confirmPassword:['',[RxwebValidators.compare({fieldName:'password'}),Validators.required]],
      role:new FormControl('',[Validators.required]),
    },

  {
  }
  )

    constructor(
      private _FormBuilder:FormBuilder,
     private _AuthService:AuthService,
    private _Router:Router,
     private _ToastrService: ToastrService,
    ){}


    register():void{

      if(this.registerForm.valid){

        const { confirmPassword, ...formValue } = this.registerForm.value;



      this._AuthService.register(formValue).subscribe({
        next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message)


        },
        error:(err)=>{

          this._ToastrService.error(err.error.message)



        },
        complete:()=>{
      this._Router.navigate(['/auth/login'])
        }
      })
    }
    }



    passwordMatchValidator(control:AbstractControl){
      return control.get('password')?.value === control.get('confirmPassword')?.value ? null :
      {mismatch:true};
        }

  
    handleSignUpClick(): void {
      this.clickCount++;
      if (this.clickCount === 4) {
        this.registerForm.patchValue({ role: 'Instructor' });
        this._ToastrService.success('Sign up as instructor')

        this.clickCount = 0; // reset the counter
      }
    }





}
