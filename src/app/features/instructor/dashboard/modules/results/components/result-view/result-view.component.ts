import { Component } from '@angular/core';
import { IStudent } from 'src/app/core/models/IGroup.model';
import { StudentsService } from '../../../students/services/students.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent {

  students: IStudent[] = [];

  constructor(private _StudentsService:StudentsService, private _ToastrService:ToastrService){}

    
  getAllStudents() {
    this._StudentsService.getAllStudents().subscribe({
      next: (res) => {
        this.students = res;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    })
  }
  }
