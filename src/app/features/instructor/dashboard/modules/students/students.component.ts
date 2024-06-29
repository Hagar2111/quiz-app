import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/core/models/IStudent.model';
import { StudentsService } from './services/students.service';
import { ToastrService } from 'ngx-toastr';
import { AddEditViewStudentComponent } from './compontents/add-edit-view-student/add-edit-view-student.component';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorService } from 'src/app/core/services/paginator/paginator.service';
import { IPager } from 'src/app/core/models/IPager.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: IStudent[] = [];
  displayedStudents: IStudent[] = [];
  tabIndex: number = 0;

  pageIndex: number = 0;
  pageSize: number = 10;
  totalCount: number = 0;
  pager!: IPager;

  constructor(private _StudentsService: StudentsService, private _ToastrService: ToastrService, private dialog: MatDialog,
    private cdr: ChangeDetectorRef, private _PaginatorService: PaginatorService<IStudent>
  ) { }

  ngOnInit(): void {
    this._PaginatorService.initPaginator(this.pageIndex + 1, this.pageSize);
    this.getAllStudents();
  }

  getAllStudents() {
    this._StudentsService.getAllStudents().subscribe({
      next: (res) => {
        // this.students = res;
        this._PaginatorService.setRows(res);
        this.totalCount = res.length;
        // this.displayedStudents = this.students.slice(0, 10);
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }, complete: () => {
        this.getPage();
      }
    })
  }

  getStudentsWithoutGroup() {
    this._StudentsService.getStudentsWithoutGroup().subscribe({
      next: (res) => {
        this._PaginatorService.setRows(res);
        this.totalCount = res.length;
        // this.students = res;
        // this.displayedStudents = this.students.slice(0, 10);
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      }, complete: () => {
        this.getPage();
      }
    })
  }



  navigateTabs(tab: number) {
    if (tab === 0) this.getAllStudents()
    else if (tab === 1) this.getStudentsWithoutGroup();

    this.tabIndex = tab;
    this.cdr.detectChanges(); // Force change detection

  }


  openAddViewEditDailog(id: string, add: boolean, view: boolean, edit: boolean): void {
    const dialogRef = this.dialog.open(AddEditViewStudentComponent, {
      width: '600px',
      minHeight: '300px',

      data: {
        id: id,
        add: add,
        view: view,
        edit: edit

      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        console.log(result)

        if (add) {
          //add

          this.addToGroup(id, result.group)


        } else if (edit) {
          console.log("add")

          this.editGroupStudent(id, result.group)

        } else {
          this.deleteStudentFromGroup(id, result.group)
        }

      }


    });

  }

  addToGroup(idStudent: string, idGroup: string): void {
    this._StudentsService.addStudentToGroup(idStudent, idGroup).subscribe({
      next: (res) => {
        console.log(res)
        this._ToastrService.success(res.message)
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this.getStudentsWithoutGroup();
      }
    })

  }

  editGroupStudent(idStudent: string, idGroup: string): void {
    this._StudentsService.updateStudentGroup(idStudent, idGroup, null).subscribe({
      next: (res) => {
        console.log(res)
        this._ToastrService.success(res.message)
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this.getAllStudents();
      }
    })
  }


  openDeleteDialog(id: string, itname: string, componentName: string): void {
    const dialo = this.dialog.open(DeletePopupComponent, {
      width: '500px',

      data: {
        comp: componentName,
        id: id,
        name: itname
      }
    });
    dialo.afterClosed().subscribe(res => {
      if (res) {
        this.deleteStudent(res)
      }
    })
  }

  deleteStudent(idStudent: string): void {
    this._StudentsService.deleteStudent(idStudent).subscribe({
      next: (res) => {
        console.log(res)
        this._ToastrService.success(res.message)
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this.getAllStudents();
        this.getStudentsWithoutGroup()
      }
    })

  }

  deleteStudentFromGroup(idStudent: string, idGroup: string): void {
    this._StudentsService.deleteStudentFromGroup(idStudent, idGroup).subscribe({
      next: (res) => {
        console.log(res)
        this._ToastrService.success(res.message)
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this.navigateTabs(0);
        //  [ngClass]="{active: tabIndex === 0}"     
      }
    })

  }

  getPage() {
    let obj = this._PaginatorService.getPage();
    if (obj) {
      this.pager = obj?.pager;
      this.displayedStudents = obj?.pageOfRows;
    }
  }

  handlePageEvent(event: PageEvent) {
    if (this.pageSize !== event.pageSize) this._PaginatorService.setPageSize(event.pageSize);
    if (this.pageIndex !== event.pageIndex) this._PaginatorService.setPageNumber(event.pageIndex + 1);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.getPage();
  }



}
