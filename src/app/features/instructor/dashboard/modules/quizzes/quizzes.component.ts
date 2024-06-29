import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuezzesService } from './services/quezzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  constructor(
    private QuezzesService:QuezzesService,
    public dialog: MatDialog
  ){}

  
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AddEditQuizComponent, {
  //     data: {name: this.categoryItem},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
      
  //     if(result){
  //       this.addCategory(result);
  //     }
  //   });
  // }

  
  // addCategory(categoryName:string){

  //   this._CategoryService.onAddCategory(categoryName).subscribe({
  //    next:(res) => {
  //      console.log(res);
  //    }, error:() => {
 
  //    }, complete:() => {
  //      this.getCategoryData()
  //    }
 
  //   })
  //  }
}
