import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-student',
  templateUrl: './side-bar-student.component.html',
  styleUrls: ['./side-bar-student.component.scss']
})
export class SideBarStudentComponent {

  @Input() collapse!: boolean


}
