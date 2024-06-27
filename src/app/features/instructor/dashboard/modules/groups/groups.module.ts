import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { AddEditViewGroupComponent } from './compontents/add-edit-view-group/add-edit-view-group.component';


@NgModule({
  declarations: [
    GroupsComponent,
    AddEditViewGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
