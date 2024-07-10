import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {

  email: string| null = localStorage.getItem('email')
  firstN: string| null = localStorage.getItem('first_name')
  lastN: string| null = localStorage.getItem('last_name')

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    private _AuthService:AuthService,
    private _ToastrService:ToastrService
  ){}

  updateNameForm: FormGroup = new FormGroup({
    first_name : new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email])
  })


  updateData():void{
    this._AuthService.updateProfile(this.updateNameForm.value).subscribe({
      next: (res)=>{
        localStorage.removeItem('first_name')
        localStorage.setItem('first_name', res.data.first_name)
        localStorage.removeItem('last_name')
        localStorage.setItem('last_name', res.data.last_name)
        localStorage.removeItem('email')
        localStorage.setItem('email', res.data.email)
        this._ToastrService.success(res.message)

      },error:(err)=>{
        this._ToastrService.error(err.error.message)
      },complete:()=>{
        this.onNoClick()
      }
    })
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}
