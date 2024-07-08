import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-found-page',
  templateUrl: './no-found-page.component.html',
  styleUrls: ['./no-found-page.component.scss']
})
export class NoFoundPageComponent {

  constructor(private _Router:Router){}


  goHome(){
    if(localStorage.getItem('role') === "Instructor"){
      this._Router.navigate(['/instructor/dashboard/home'])
    } else if(localStorage.getItem('role') === 'Student'){

      this._Router.navigate(['/student'])

    }else{
      this._Router.navigate(['/auth'])

    }
  }


}
