import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupsService } from '../../../groups/services/groups.service';
import { IAllGroups } from '../../../groups/models/iall-groups';
import { QuezzesService } from '../../services/quezzes.service';
import { ToastrService } from 'ngx-toastr';
import { IQuizResponse, IquizDetails } from '../../models/IQuizzes';
import { ResponseComponent } from '../response/response.component';
import { ICurrentQuizz } from '../../models/icurrent-quizz';

@Component({
  selector: 'app-add-edit-quizz',
  templateUrl: './add-edit-quizz.component.html',
  styleUrls: ['./add-edit-quizz.component.scss']
})
export class AddEditQuizzComponent implements OnInit{

  header: string = ''

  selectedDate: Date = new Date();
  dateControl = new FormControl(new Date());
  timeControl = new FormControl('');
  groupsList: IAllGroups[] = []
  responseCode: string= ''
  quizzId: string= ''
  currentQuizz!: ICurrentQuizz

  constructor(
    public dialogRef: MatDialogRef<AddEditQuizzComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _GroupsService:GroupsService,
    private _QuezzesService:QuezzesService,
    private _ToastrService:ToastrService,
    public dialog: MatDialog
  ){}


  ngOnInit(): void {
    if(this.data.id){
      this.quizzId= this.data.id
      this.header = 'Update your quizz'
      this.getCurrentQuiz()
    }else{
      this.header = 'Set up a new quizz'
    }
    this.getAllGroups()
  }

  getAllGroups():void{
    this._GroupsService.getAllGroups().subscribe({
      next: (res)=>{
        // console.log(res);
        this.groupsList = res
        console.log(this.groupsList);
      }
    })
  }

  getCurrentQuiz(){
    this._QuezzesService.getQuizById(this.quizzId).subscribe({
      next: (res)=>{
        console.log('current quizz',res);
        this.currentQuizz = res
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.quizzForm.patchValue({
          title: this.currentQuizz.title,
          description: this.currentQuizz.description,
          group: this.currentQuizz.group,
          questions_number: this.currentQuizz.questions_number.toString(),
          difficulty: this.currentQuizz.difficulty,
          type: this.currentQuizz.type,
          schadule: this.currentQuizz.schadule,
          duration: this.currentQuizz.duration.toString(),
          score_per_question: this.currentQuizz.score_per_question.toString()
        })
      }
    })
  }

  quizzForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    group: new FormControl('', [Validators.required]),
    questions_number: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    schadule: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    score_per_question: new FormControl('', [Validators.required])
  })

  // logDateTime() {
  //   const date = this.dateControl.value;
  //   const time = this.timeControl.value;
  //   const dateTime = `${date}${time}`


  //   // const [hours, minutes, seconds] = time!.split(':').map(Number);
  //   // dateTime.setHours(hours, minutes, seconds);

  //   // console.log(date?.toString().split(':'));
  //   console.log(date);

  //   console.log(dateTime.toString().split(':'));
  //   console.log(dateTime);

  // }

  sendQuizzData():void{
    // const date = this.dateControl.value;
    // const time = this.timeControl.value;
    // const dateTime = `${date}${time}`

    // this.quizzForm.get('schadule')?.setValue(dateTime)

    if(this.data.id){
      this._QuezzesService.updateQuiz( this.quizzId, this.quizzForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          this._ToastrService.success(res.message)
        },error: (err)=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
        }
      })
    }else{
      this._QuezzesService.onAddQuiz(this.quizzForm.value).subscribe({
        next: (res)=>{
          this.responseCode = res.data.code
          this._ToastrService.success(res.message);
        },error:(err)=>{
          this._ToastrService.error(err.error.message)
        },
        complete:()=>{
          this.onNoClick()
          this.openResponseDialog()
        }
      })
    }

  }



  openResponseDialog(): void {
    const dialogRef = this.dialog.open(ResponseComponent, {

    data: this.responseCode
      //  this.quizzResponse.data.code
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}

