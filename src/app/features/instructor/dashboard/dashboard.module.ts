import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { HomeComponent } from './modules/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UpdateProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
