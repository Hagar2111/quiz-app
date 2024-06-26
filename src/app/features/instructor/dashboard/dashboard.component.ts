import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  collapseCol: boolean = true
  // screenWidth: number = 0

  // @HostListener('window:resize', ['$event'])
  // onResize(event:any){
  //   this.screenWidth = window.innerWidth
  //   if(this.screenWidth <= 768) {
  //     this.collapseCol = false
  //   }
  // }

  toggleSidebar():void{
    this.collapseCol = !this.collapseCol
  }
}
