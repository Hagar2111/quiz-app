import { Component, OnInit } from '@angular/core';
import { GroupsService } from './services/groups.service';
import { IAllGroups } from './models/iall-groups';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit{

  AllGroups: IAllGroups[] = []

  constructor(private _GroupsService:GroupsService){}

  ngOnInit(): void {
    this.getAllGroups()
  }

  getAllGroups():void{
    this._GroupsService.getAllGroups().subscribe({
      next:(res)=>{
        this.AllGroups.push(...res)
        console.log(this.AllGroups);
      }
    })
  }
}
