import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent {


  constructor (
    public _DialogRef:DialogRef,@Inject(DIALOG_DATA) public data: {comp:string,id:string,name:string}){
    }

}
