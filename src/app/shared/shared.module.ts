import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports:[
    ReactiveFormsModule,
    RouterLink,
    NavbarComponent,
    SidebarComponent,
    RouterLinkActive,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    NgIf,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
