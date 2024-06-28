import { Component, OnInit } from '@angular/core';
import { GroupsService } from './services/groups.service';
import { IAllGroups } from './models/iall-groups';
import { AddEditViewGroupComponent } from './compontents/add-edit-view-group/add-edit-view-group.component';
import { MatDialog } from '@angular/material/dialog';
import { IUpdateOrAddGroup } from 'src/app/core/models/IGroup.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit{

  AllGroups: IAllGroups[] = []

  constructor(private _GroupsService:GroupsService, private dialog: MatDialog,private _ToastrService:ToastrService){}

  ngOnInit(): void {
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






  addNewGroup(addNewGroup: IUpdateOrAddGroup) {
    this._GroupsService.AddNewGreoup(addNewGroup).subscribe({
      next: (res) => {
         console.log(res)
         this._ToastrService.success(res.message)

      },
      error: (err) => {

        this._ToastrService.error(err.error.message)
      },
      complete: () => {
        this.getAllGroups();
      }

    })
  }



  editGroup(id: string, data: IUpdateOrAddGroup) {
    this._GroupsService.editGroup(id, data).subscribe({
      next: (res) => {
        // console.log(res)
        this._ToastrService.success(res.message)

      },
      error: (err) => {
        this._ToastrService.error(err.error.message)


      },
      complete: () => {
        this.getAllGroups();
      }

    })
  }

  openAddViewEditDailog(enterAnimationDuration: string, exitAnimationDuration: string,id: string, add: boolean , view: boolean , edit: boolean ): void {
    const dialogRef = this.dialog.open(AddEditViewGroupComponent, {
      width: '600px',
      minHeight: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
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
    
        if(id){
          //edit
          console.log("edit")

          this.editGroup(id, result)


        }else{
          console.log("add")

        this.addNewGroup(result)

        }

      }


    });

  }

}
