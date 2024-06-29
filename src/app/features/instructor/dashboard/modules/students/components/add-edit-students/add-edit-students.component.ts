import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-students',
  templateUrl: './add-edit-students.component.html',
  styleUrls: ['./add-edit-students.component.scss']
})
export class AddEditStudentsComponent {
  
  constructor(
    public dialogRef: MatDialogRef<AddEditStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
