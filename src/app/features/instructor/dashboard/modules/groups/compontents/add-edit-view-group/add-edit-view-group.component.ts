import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGroup, IStudent } from 'src/app/core/models/IGroup.model';
import { GroupsService } from '../../services/groups.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentsService } from '../../../students/services/students.service';

@Component({
  selector: 'app-add-edit-view-group',
  templateUrl: './add-edit-view-group.component.html',
  styleUrls: ['./add-edit-view-group.component.scss']
})
export class AddEditViewGroupComponent {


  studentsGroup: IStudent[] = [];
  groupDetails: IGroup = {
    _id: '',
    name: '',
    status: '',
    instructor: '',
    students: this.studentsGroup,
    max_students: 0
  }

  
  addEditGroupForm!: FormGroup ;

  allStudentsWithoutGroup!:any ;

  constructor(private _GroupsService: GroupsService , private _StudentsService: StudentsService,private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditViewGroupComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { 

      this.addEditGroupForm= this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        students: new FormControl([], [Validators.required]),
      })
    }

  ngOnInit(): void {



    if(this.data.id){
      this.getGroupById(this.data.id);

      if(this.data.view){
        this.addEditGroupForm.disable();

      }
    }
 

  
   
      this.getAllStudentsWithoutGroup();
  }

  getGroupById(id: string) {
    this._GroupsService.getGroupById(id).subscribe({
      next: (res: IGroup) => {
         console.log(res);
        this.groupDetails = res;

      }, error: (err: HttpErrorResponse) => {
         //console.log(err)
      },complete :()=>{
        console.log(this.addEditGroupForm.value)


        this.addEditGroupForm.patchValue({
          name: this.groupDetails.name,
          students: this.groupDetails.students.map(f => f._id),
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



  getAllStudentsWithoutGroup(){
    this._StudentsService.getStudentsWithoutGroup().subscribe({
      next:(res)=>{
         console.log(res);
         this.allStudentsWithoutGroup=res
         console.log(this.allStudentsWithoutGroup)
      }
    });


   }

  

}
