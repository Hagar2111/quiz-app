import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {


  constructor(
    public dialogRef: MatDialogRef<ResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _Clipboard:Clipboard
  ){}

  code: string = this.data

  // textToCopy: string = '';
  copySuccess: boolean = false;
  copySuccessMessage: string = 'Text copied to clipboard!';



  copyText() {
    this._Clipboard.copy(this.code);
    this.copySuccess = true;
    setTimeout(() => {
      this.copySuccess = false;
    }, 3000);
  }


  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
