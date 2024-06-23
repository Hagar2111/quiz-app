import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule ,RouterLink,
  ],
  exports:[
    ReactiveFormsModule ,RouterLink,


  ]
})
export class SharedModule { }
