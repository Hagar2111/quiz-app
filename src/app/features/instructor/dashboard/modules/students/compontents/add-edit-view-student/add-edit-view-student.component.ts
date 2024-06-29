import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent, IGroup } from 'src/app/core/models/IGroup.model';
import { AddEditViewGroupComponent } from '../../../groups/compontents/add-edit-view-group/add-edit-view-group.component';
import { GroupsService } from '../../../groups/services/groups.service';
import { StudentsService } from '../../services/students.service';
import { IAllGroups } from '../../../groups/models/iall-groups';
import {  IStudentWithGroup } from 'src/app/core/models/IStudent.model';

@Component({
  selector: 'app-add-edit-view-student',
  templateUrl: './add-edit-view-student.component.html',
  styleUrls: ['./add-edit-view-student.component.scss']
})
export class AddEditViewStudentComponent {




  studentsGroup: IStudent[] = [];
  groupDetails: IGroup = {
    _id: '',
    name: '',
    status: '',
    instructor: '',
    students: this.studentsGroup,
    max_students: 0
  }


  AllGroups: IAllGroups[] = []
  studentDetails:IStudentWithGroup={
    _id:'',
    email:'',
    first_name:'',
    last_name:'',
    role:'',
    status:'',
    group:{
      _id:'',
      createdAt:'',
      instructor:'',
      max_students:0,
      name:'',
      status:'',
      students:[],
      updatedAt:''

    }
  }

  
  addEditGroupForm!: FormGroup ;


  constructor(private _GroupsService: GroupsService , private _StudentsService: StudentsService,private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditViewGroupComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { 

      this.addEditGroupForm= this.formBuilder.group({
        group: new FormControl('', [Validators.required]),
      })
    }

  ngOnInit(): void {



      this.getStudentById(this.data.id);

      if(this.data.view){
        this.addEditGroupForm.disable();

      }
    
 

  this.getAllGroups()
   
  }

  getAllGroups():void{

    this._GroupsService.getAllGroups().subscribe({
      next:(res)=>{
        this.AllGroups=res
        console.log(this.AllGroups);
      }
    })
  }

  getStudentById(id: string) {
    this._StudentsService.getStudentById(id).subscribe({
      next: (res) => {
         console.log(res);
        this.studentDetails = res;

      }, error: (err: HttpErrorResponse) => {
         //console.log(err)
      },complete :()=>{
        console.log(this.addEditGroupForm.value)


        this.addEditGroupForm.patchValue({
          group: this.studentDetails.group._id,
        });

        console.log(this.addEditGroupForm.value)

      }
    })
  }

  submit() { 
    this.dialogRef.close(this.addEditGroupForm.value);
    console.log(this.addEditGroupForm.value)
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }






}
