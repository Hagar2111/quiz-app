import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ToastrService } from 'ngx-toastr';
import { AllResult } from '../models/IStudent';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  allResults: AllResult=[];

  constructor(
    private _StudentService:StudentService,
    private _ToastrService:ToastrService
  ){}
  
  ngOnInit(): void {
    this.getResults();

  }
  

  getResults(){
    this._StudentService.getAllResult().subscribe({
      next:(res) => {
        this.allResults = res;
        console.log(this.allResults);
      },
      error:(err)=>{
        this._ToastrService.error(err.error.message);
      }
    })
  }

}
