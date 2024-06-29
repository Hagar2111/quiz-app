import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>
  ){}

  updateNameForm: FormGroup = new FormGroup({
    first_name : new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email])
  })





  onNoClick(): void {
    this.dialogRef.close();
  }
}
