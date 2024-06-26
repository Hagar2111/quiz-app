import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/core/models/IStudent.model';
import { StudentsService } from './services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: IStudent[] = [];
  displayedStudents: IStudent[] = [];
  tabIndex: number = 0;

  constructor(private _StudentsService: StudentsService, private _ToastrService: ToastrService ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this._StudentsService.getAllStudents().subscribe({
      next: (res) => {
        this.students = res;
        this.displayedStudents = this.students.slice(0, 10);
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    })
  }

  getStudentsWithoutGroup(){
    this._StudentsService.getStudentsWithoutGroup().subscribe({
      next: (res) => {
        this.students = res;
        this.displayedStudents = this.students.slice(0, 10);
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }
    })
  }

  addToGroup() { }

  showStudent(){ }

  navigateTabs(tab: number){
   if(tab === 0) this.getAllStudents()
  else if(tab === 1) this.getStudentsWithoutGroup();

   this.tabIndex = tab;
  }
}
